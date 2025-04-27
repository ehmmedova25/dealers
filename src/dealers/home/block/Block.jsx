import React from 'react';
import styles from './Block.module.css';

const Block = () => {
  return (
    <div className={styles.block}>
      <div className={styles.imageSection}>
        <img src="https://preview.colorlib.com/theme/dealers/images/model_woman_1.png.webp" alt="Jacket" />
      </div>
      <div className={styles.textSection}>
        <p className={styles.subtitle}>#NEW SUMMER COLLECTION 2019</p>
        <h1 className={styles.title}>JACKET</h1>
        <button className={styles.button}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Block;
