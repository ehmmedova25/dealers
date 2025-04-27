import styles from './Banner.module.css';


const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.textArea}>
                <h1>MADEWELL</h1>
                <p>Summer Collection</p>
                <div className={styles.price}>
                    <span className={styles.newPrice}>1,499</span>
                    <span className={styles.oldPrice}>$1,999</span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btnOutline}>SHOP NOW</button>
                    <button className={styles.btnFilled}>SHOP NOW</button>
                </div>
            </div>
            <img src='https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png' alt="model" className={styles.image} />
        </section>
    );
};

export default Banner;