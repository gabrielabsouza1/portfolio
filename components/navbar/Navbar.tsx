import React, { useState, useEffect } from 'react';
import * as data from '../../public/data/navlinks.json';
import styles from './style.module.scss';
import Image from 'next/image';
import { motion } from "framer-motion";
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type NavLink = {
    label: string;
    href: string;
};


const Links: React.FC<{ links: NavLink[] }> = ({ links }) => {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const buttonHandler = (event: any) => {
        event.preventDefault();
        setOpen(!open);
    };

    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const linksAnimations = {
        hidden: {
            opacity: 0,
            y: -30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            },
        },
    };

    useEffect(() => {
        window.screen.width <= 991 && setIsMobile(true)
    }, [])


    return (
        <div className={styles.links_container}>
            <div className={open ? `${styles.nav_icon} ${styles.open}` : `${styles.nav_icon}`} onClick={buttonHandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='position-relative'>
                {isMobile &&
                    (<div
                        className={styles.list_links} 
                        style={open ? { maxHeight: 240 + 'px', visibility: 'visible' } : { maxHeight: 0, visibility: 'hidden' }}>
                        {links.map((link: NavLink) => {
                            return (
                                <div key={link.href} className={styles.link}>
                                    <a href={link.href}>
                                        {link.label}
                                    </a>
                                </div>
                            )
                        })}
                    </div>)
                }
                {!isMobile &&
                    (<motion.div
                        variants={variants}
                        initial="hidden"
                        animate="show"
                        className={styles.list_links}>
                        {links.map((link: NavLink) => {
                            return (
                                <motion.div variants={linksAnimations} key={link.href} className={styles.link}>
                                    <a href={link.href}>
                                        {link.label}
                                    </a>
                                </motion.div>
                            )
                        })}
                    </motion.div>)
                }
            </div>
        </div>
    )
};

const Navbar: React.FC<{}> = () => {

    return (
        <nav className={styles.navbar} style={{ zIndex: 10 }}>
            <div className={styles['logo-container']}>
                <a href={'/'}><Image height={92} width={70} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src="/img/logo2.png" className='img-fluid' alt="" /></a>
            </div>
            <Links links={links} />
        </nav>
    )
}

export default Navbar;