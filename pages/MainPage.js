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
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        <section className={styles.portfolioSection} id="portfolio">
          <div className={styles.portfolioContent}>
            <h2 className={styles.portfolioHeading}>Our Portfolio</h2>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioItemImage}>
                <Image src="/Mandarin.jpg" width={150} height={100} alt="Mandarin" />
              </div>
              <h3 className={styles.portfolioItemTitle}>Export through Goldviz Trade Solutions</h3>
              <p className={styles.portfolioItemText}>
                We have successfully exported the following seasonal products to international partners both by sea and air:
                Mandarin, Fresh Turmeric, Potato, Fresh Peas, Fresh Carrots, Guava, Sugarcane Cuts.
              </p>
            </div>

            <div className={styles.portfolioItem}>
              <h3 className={styles.portfolioItemTitle}>Local Business – Goldviz Fresh</h3>
              <p className={styles.portfolioItemText}>
                We sell daily sourced fresh fruits and vegetables to retail consumers through our joint venture with Rahman Khalis Store.
                In addition, we supply HORECA, Medical, and Corporate clients as per their daily requirements.
                Goldviz Fresh also has the capability to provide customized packaging solutions to our local customers based on their specific needs.
              </p>
            </div>

            <div className={styles.portfolioItem}>
              <div className={styles.portfolioItemImage}>
                <Image src="/mango.jpeg" width={150} height={100} alt="Mango" />
              </div>
              <h3 className={styles.portfolioItemTitle}>Mango – everyone’s favorite, our specialty</h3>
              <p className={styles.portfolioItemText}>
                Every year, our customers enjoy superior-quality mangoes expertly sourced by us throughout the season (May to September).
                
              </p>
            </div>

            <div className={styles.portfolioItem}>
                <Link href="#contactUs">
                    <p className={styles.portfolioItemText} style={{ textAlign: "center", fontWeight: "bolder", fontSize: "20px", color: "#374b40" }}>
                        While the above is a snapshot of what we have supplied already, we can handle any other seasonal fruits or vegetables as 
                        per your requirements as well - Talk to us!
                    </p>
                </Link>
            </div>
          </div>
        </section>

        <div className={styles.sectionSeparator}></div>

        <section className={styles.whyGoldvizSection} id="why">
          <div className={styles.whyGoldvizContent}>
            <h2 className={styles.portfolioHeading}>Why Goldviz</h2>
            
            <div className={styles.whyGoldvizCard}>
              <h3 className={styles.whyGoldvizTitle}>Gold Standard Services</h3>
              <p className={styles.whyGoldvizText}>
                We offer world-class service and support our partners end-to-end. Our supply chain solutions are tailored to each specific demand or order covering all aspects of cost, quality, and required documentation within committed timelines.
              </p>
            </div>

            <div className={styles.whyGoldvizCard}>
              <h3 className={styles.whyGoldvizTitle}>Expertise</h3>
              <p className={styles.whyGoldvizText}>
                Goldviz team is professional and knowledgeable with more than 50 years of experience among them. In addition, we have carefully selected our supply chain partners and closely work with them to ensure consistent quality delivered to you.
              </p>
            </div>

            <div className={styles.whyGoldvizCard}>
              <h3 className={styles.whyGoldvizTitle}>Satisfied Customers</h3>
              <p className={styles.whyGoldvizText}>
                We have a solid track record of 100% Customer satisfaction score to date. We want to grow with you and that is why we consider you our business partners, not customers.
              </p>
            </div>

            <div id={styles.whyGoldVizContact} className={styles.whyGoldvizCard}>
                <Link href="#contactUs">
                    <p className={styles.whyGoldvizText} style={{ textAlign: "center", fontWeight: "bolder", fontSize: "20px", color: "#374b40" }}>
                        Let’s start the journey towards success together – reach out to us now! 
                    </p>
                </Link>
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
