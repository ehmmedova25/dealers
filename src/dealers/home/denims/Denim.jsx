import React from 'react';
import styles from './Denim.module.css';


const Denim = () => {
    return (
        <section className={styles.denimContainer}>
            <div className={styles.imageWrapper}>
                <img
                    src='https://preview.colorlib.com/theme/dealers/images/model_5.png'
                    alt="Denim Collection"
                    className={styles.denimImage}
                />
            </div>
            <div className={styles.textWrapper}>
                <p className={styles.subtitle}>#NEW SUMMER COLLECTION 2019</p>
                <h1 className={styles.title}>NEW DENIM <br /> COAT</h1>
                <button className={styles.shopNowButton}>SHOP NOW</button>
            </div>
        </section>
    );
};

export default Denim;