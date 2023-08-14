import React from 'react';
import styles from './styles/MainPage.module.css'
import Link from 'next/link';

const Layout = ({ children }) => {

  return (
    <div>
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/">
                    <img src="/logo.png" alt="Logo" width={100} height={100} />
                    </Link>
                </div>
                <ul className={styles.navList}>
                    <li>
                        <Link href="#portfolio">
                        <div className={styles.navButton}>Our Portfolio</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#why">
                        <div className={styles.navButton}>Why Goldviz</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#team">
                        <div className={styles.navButton}>Our Team</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contactUs">
                        <div className={styles.navButton}>Contact Us</div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        {children}
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <p>&copy; {new Date().getFullYear()} Goldviz Trade Solutions (Pvt) Ltd. All rights reserved.</p>
                <p>
                Address: 2A, Building 75, Askari – 11, Lahore – 54792, Pakistan<br />
                Email: info@goldviz.com.pk<br />
                Phone: +92 302 043 8715, +92 316 467 9705
                </p>
            </div>
        </footer>
    </div>
  );
};

export default Layout;
