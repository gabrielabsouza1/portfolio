import React, { useState } from 'react';
import * as data from '../../public/data/navlinks.json';
import styles from './style.module.scss';
import Lottie from 'react-lottie';
import menuData from '../../public/data/menu.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type NavLink = {
    label: string;
    href: string;
};

const Links: React.FC<{ links: NavLink[] }> = ({ links }) => {
    const [open, setOpen] = useState(false);

    const buttonHandler = (event: any) => {
        event.preventDefault();
        setOpen(!open);
    };

    return (
        <div className={styles.links_container}>
            <div className={open ? `${styles.nav_icon} ${styles.open}` : `${styles.nav_icon}`} onClick={buttonHandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='position-relative'>
                <div className={styles.list_links} style={open ? { maxHeight: 240 + 'px', visibility: 'visible'} : { maxHeight: 0, visibility: 'hidden' }}>
                    {links.map((link: NavLink) => {
                        return (
                            <div key={link.href} className={styles.link}>
                                <a href={link.href}>
                                    {link.label}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

const Navbar: React.FC<{}> = () => {

    return (
        <nav className={styles.navbar} style={{ zIndex: 10 }}>
            <div className={styles['logo-container']}>
                <a href={'/'}><img width={70} src="/img/logo2.png" className='img-fluid' alt="" /></a>
            </div>
            <Links links={links} />
        </nav>
    )
}

export default Navbar;