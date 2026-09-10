import React, { useEffect, useState } from "react";
import navData from "../../public/data/navlinks.json";
import styles from "./style.module.scss";
import { SITE } from "data/site";
import SocialLinks from "components/social/SocialLinks";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = navData.links;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} aria-label="Primary">
      <div className={styles.bar}>
        <a href="#top" className={styles.wordmark} onClick={closeMenu}>
          {SITE.name}
        </a>

        <div className={styles.desktop}>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a className={styles.resume} href={SITE.cv}>
            Resume
          </a>
          <SocialLinks />
        </div>

        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.open : ""}`}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.mobileInner}>
          <ul className={styles.mobileLinks}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} tabIndex={open ? 0 : -1}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={SITE.cv} onClick={closeMenu} tabIndex={open ? 0 : -1}>
                Resume
              </a>
            </li>
          </ul>
          <div className={styles.mobileSocial}>
            <SocialLinks tabIndex={open ? 0 : -1} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
