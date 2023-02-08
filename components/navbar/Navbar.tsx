import React from 'react';
import * as data from '../../public/data/navlinks.json';
import styles from './style.module.scss';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type NavLink = {
    label: string;
    href: string;
};

const Links: React.FC<{ links: NavLink[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: NavLink) => {
                return (
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

const Navbar: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar} style={{zIndex: 9999}}>
            <div className={styles['logo-container']}>
                <a href={'/'}><img width={70} src="/img/logo2.png" className='img-fluid' alt="" /></a>
            </div>
            <Links links={links} />
        </nav>
    )
}

export default Navbar;