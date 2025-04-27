import React from 'react';
import styles from './Denim.module.css';

const Denim = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src='https://preview.colorlib.com/theme/dealers/images/model_5.png' alt="Denim Collection" className={styles.image} />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subtitle}>#NEW SUMMER COLLECTION 2019</p>
        <h1 className={styles.title}>NEW DENIM <br /> COAT</h1>
        <button className={styles.button}>SHOP NOW</button>
      </div>
    </section>
  );
};

export default Denim;

