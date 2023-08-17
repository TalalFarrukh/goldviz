import styles from '../styles/MainPage.module.css'; // Create a new CSS module for this page
import Image from 'next/image';
import Layout from '../Layout';
import Link from 'next/link';

const AboutUsPage = () => {
  return (
    <Layout>
      <div className={styles.mainPageContainer}>
        <section className={styles.aboutUsSection}>
          <div className={styles.aboutUsContent}>
            <h2 className={styles.aboutUsTitle}>Welcome to Goldviz Trade Solutions!</h2>
            <p className={styles.aboutUsText}>Your one-stop shop for fresh agricultural products exported to international markets globally. We firmly believe in quality and building strong partnerships with businesses around the world.</p>
            <p className={styles.aboutUsText}>We successfully ship fruits and vegetables to the GCC Countries in the Middle East and are currently exploring supply chain partners across Europe and the Far East. We are also interested in establishing direct working relations with industrial and retail sectors globally.</p>
            <p className={styles.aboutUsText}>At Goldviz, our focus is on super-fresh, highest-quality produce at market-competitive rates. We export Pakistan’s world-renowned fruits and vegetables while promoting less-known crops as well.</p>
            <p className={styles.aboutUsText}>Through our subsidiary – Goldviz Fresh – we also cater to the domestic market in Pakistan. Our joint venture with Rahman Khalis Store in Lahore sells daily fresh fruits and vegetables to retail customers locally. Goldviz Fresh supplies HORECA, Hospitals, and corporate clients as well.</p>
          
            <h2 className={styles.aboutUsVisionMission}>Our Vision</h2>
            <p className={styles.aboutUsText}>Become every customer’s choice for quality fruits and vegetables both in local and international markets.</p>
          
            <h2 className={styles.aboutUsVisionMission}>Our Mission</h2>
            <p className={styles.aboutUsText}>Continuously research and enhance the capability to deliver internationally certified and approved products through competent teams and external partners thereby achieving excellence in all aspects of market leadership.</p>
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        <section className={styles.portfolioSection} id="products">
          <div className={styles.portfolioContent}>
            <h2 className={styles.portfolioHeading}>Our Products</h2>
            <div className={styles.portfolioItem}>
              <div>
                <Image src="/Mandarin.jpg" width={150} height={100} alt="Mandarin" />
                <Image src="/mango.jpeg" width={150} height={100} alt="Mango" style={{ marginLeft: "10px" }} />
                <Image src="/Tumeric.jpeg" width={150} height={100} alt="Mango" style={{ marginLeft: "10px" }} />
              </div>
              <h3 className={styles.portfolioItemTitle}>Export</h3>
              <div className={styles.portfolioItemText}>
                Goldviz Trade Solutions has been successfully exporting the following seasonal products to international partners both by sea and air:
                <ul>
                  <li>Mango</li>
                  <li>Mandarin</li>
                  <li>Fresh Tumeric</li>
                  <li>Potato</li>
                  <li>Fresh Peas</li>
                  <li>Fresh Carrots</li>
                  <li>Guava</li>
                  <li>Sugarcane Cuts</li>
                </ul>
                In addition, we can supply any other seasonal fruits or vegetables as per customer requirements.
              </div>
            </div>

            <div className={styles.portfolioItem}>
              <div>
                <Image src="/goldvizFresh.png" width={150} height={90} alt="Goldviz Fresh" />
                <Image src="/shkh.png" width={130} height={110} alt="Shaukat Khanum" style={{ marginLeft: "10px" }} />
              </div>
              <h3 className={styles.portfolioItemTitle}>Local Business – Goldviz Fresh</h3>
              <p className={styles.portfolioItemText}>
                Through Goldviz Fresh, we sell daily sourced fresh fruits and vegetables to retail consumers through our joint venture with Rahman Khalis.                 
              </p>
              <p className={styles.portfolioItemText}>
                In addition, we supply HORECA, Medical, and Corporate clients as per their daily requirements. One of our prestigious accounts is Shaukat Khanum Memorial Cancer Hospital and Research Centre where we supply fresh fruits and vegetables daily as per their requirements. 
              </p>
              <p className={styles.portfolioItemText}>
                Goldviz Fresh has the capability to provide customized packaging solutions to our local customers based on their specific needs. 
              </p>
              <p className={styles.portfolioItemText}>
                Every year, our customers also enjoy superior-quality mangoes expertly sourced by us throughout the season (May to September).
              </p>
            </div>
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        <section className={styles.whyGoldvizSection} id="partners">
          <div className={styles.whyGoldvizContent}>
            <h2 className={styles.portfolioHeading}>Our Partners</h2>
            
            <div className={styles.whyGoldvizCard}>
              <div className={styles.whyGoldvizText}>
                At Goldviz, we are proud of our solid relationship with our business partners who have grown with us through the years. We are happy to share additional details based on specific queries.
                <ul>
                  <li>RAAZIQ INTERNATIONAL – Logistics Service Provider</li>
                  <li>ROSHAN PACKAGING – Packaging Supplier</li>
                  <li>REHMAN KHALIS – Retail JV Partner</li>
                </ul>
              </div>
            </div>
                    
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        <section className={styles.ourTeamSection} id="team">
          <div className={styles.ourTeamContent}>
            <h2 className={styles.portfolioHeading}>Our Team</h2>

            <div className={styles.teamMember}>
              <div className={styles.teamMemberImage}>
                <Image src="/profilePic.jpg" width={200} height={200} alt="Farrukh Rasheed" />
              </div>
              <h3 className={styles.teamMemberName}>Farrukh Rasheed</h3>
              <p className={styles.teamMemberRole}>Chief Executive - Operations and Commercial</p>
              <p className={styles.teamMemberDescription}>
                Having worked in the transportation sector for more than 20 years, Farrukh has extensive experience in handling operations and customers at all levels both locally and internationally.
              </p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.teamMemberImage}>
                <Image src="/profilePic.jpg" width={200} height={200} alt="Faisal Mahmood" />
              </div>
              <h3 className={styles.teamMemberName}>Faisal Mahmood</h3>
              <p className={styles.teamMemberRole}>Head of Supply Chain</p>
              <p className={styles.teamMemberDescription}>
                With more than 18 years of corporate work experience in operations and supply chain management, Faisal manages all aspects of our supply chain operations.
              </p>
            </div>
                        
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>
        
        <section className={styles.contactUsSection} id="contactUs">
          <div className={styles.contactUsContent}>
            <h2 className={styles.contactUsTitle}>Contact Us</h2>
            
            <div className={styles.contactUsDetails}>
              <p className={styles.contactUsInfo}>
                At Goldviz, we are ready to meet all your fresh fruit and vegetable supply needs – both locally and internationally.
              </p>
              <p className={styles.contactUsInfo}>
                Find out more by sending us an email or giving us a call – we are here for you!
              </p>
              <p className={styles.contactUsInfo}>
                Email: info@goldviz.com.pk
              </p>
              <p className={styles.contactUsInfo}>
                Phone: +92 302 043 8715, +92 316 467 9705
              </p>
              <p className={styles.contactUsInfo}>
                Website: www.goldviz.com.pk
              </p>
              <p className={styles.contactUsInfo}>
                Address: 2A, Building 75, Askari – 11, Lahore – 54792, Pakistan
              </p>
            </div>
            
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default AboutUsPage;
