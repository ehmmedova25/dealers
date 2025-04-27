import React from 'react';
import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.about}>
          <h3>About Us</h3>
          <p>
  Lorem ipsum dolor
  sit amet, <br />consectetur adipisicing elit. 
  Eius<br /> quae reiciendis
  distinctio <br /> voluptates sed dolorum
  excepturi  <br />iure eaque, aut unde.
</p>

          <div className={styles.subscribe}>
            <h4>Subscribe</h4>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email" />
              <button>SEND</button>
            </div>
          </div>
        </div>

        <div className={styles.links}>
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

        <div className={styles.contact}>
          <h3>Contact Info</h3>
          <ul>
            <li><FaMapMarkerAlt className={styles.icon} /> 203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li><FaPhoneAlt className={styles.icon} /> +2 392 3929 210</li>
            <li><FaEnvelope className={styles.icon} /> emailaddress@domain.com</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Copyright ©2025 All rights reserved | This template is made with <span className={styles.heart}>♥</span> by <span className={styles.link}>Colorlib</span></p>
      </div>
    </footer>
  );
};

export default Footer;
