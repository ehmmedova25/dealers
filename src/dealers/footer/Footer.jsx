import React from 'react';
import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerTop}>
        <div className={styles.aboutSection}>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            Eius<br /> quae reiciendis distinctio <br /> voluptates sed dolorum
            excepturi <br /> iure eaque, aut unde.
          </p>

          <div className={styles.subscriptionSection}>
            <h4>Subscribe</h4>
            <div className={styles.emailInputGroup}>
              <input type="email" placeholder="Email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className={styles.quickLinksSection}>
          <h3>Quick Links</h3>
          <div className={styles.linkColumns}>
            <ul>
              <li>Sell online</li>
              <li>Features</li>
              <li>Shopping cart</li>
              <li>Store builder</li>
            </ul>
            <ul>
              <li>Mobile commerce</li>
              <li>Dropshipping</li>
              <li>Website development</li>
            </ul>
            <ul>
              <li>Point of sale</li>
              <li>Hardware</li>
              <li>Software</li>
            </ul>
          </div>
        </div>

        <div className={styles.contactSection}>
          <h3>Contact Info</h3>
          <ul>
            <li><FaMapMarkerAlt className={styles.contactIcon} /> 203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li><FaPhoneAlt className={styles.contactIcon} /> +2 392 3929 210</li>
            <li><FaEnvelope className={styles.contactIcon} /> emailaddress@domain.com</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright ©2025 All rights reserved | This template is made with <span className={styles.heartIcon}>♥</span> by <span className={styles.creatorLink}>Colorlib</span></p>
      </div>
    </footer>
  );
};

export default Footer;
  