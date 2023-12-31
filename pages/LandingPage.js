import styles from '../styles/LandingPage.module.css';
import Image from 'next/image'
import Map from '../Map';


const LandingPage = () => {
  return (

    <div>

        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <img src="/logo.png" alt="Logo" width={150} height={50} />
            </div>
        </div>

        <header className={styles.header}>
            <div className={styles.hero}>
                <h1>Welcome to Goldviz</h1>
                <p>Your one-stop shop for fresh agricultural products.</p>
                <a href="/MainPage" className={styles.ctaButton}>Explore</a>
            </div>
        </header>

        <section className={styles.mapSection}>
            <h2>Our Location</h2>
            <div className={styles.mapContainer}>
            {/* Integrate your map component here */}
            <Map />
            </div>
        </section>

        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
            <p>&copy; 2023 Goldviz Trade Solutions (Pvt) Ltd. All rights reserved.</p>
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

export default LandingPage;
