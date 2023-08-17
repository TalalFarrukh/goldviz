import React, { useState } from 'react';
import styles from './styles/MainPage.module.css'
import Link from 'next/link';

const Layout = ({ children }) => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

  return (
    <div>
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <img src="/logo.png" alt="Logo" width={150} height={50} />
            </div>
            <div className={`${styles.navbarMenu} ${menuActive ? styles.active : ''}`}>
                <Link href="/">Home</Link>
                <Link href="#products">Products</Link>
                <Link href="#partners">Partners</Link>
                <Link href="#team">Team</Link>
                <Link href="#contactUs">Contact</Link>
            </div>
            <button className={styles.menuButton} onClick={toggleMenu}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="white"
                    >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 18h16v-2H4zm0-5h16v-2H4zm0-5h16V6H4z" />
                </svg>
            </button>
        </div>
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
