import React from 'react';
import { useSelector } from 'react-redux';
import styles from './FeaturedProducts.module.css';

const FeaturedProducts = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.title}>Collections</h2>
      <div className={styles.featuredGrid}>
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
