"use client";
import React, { useEffect, useState } from 'react';
import styles from './Jewelry.module.css';
import { fetchJewelry } from '../../services/pages';

const Jewelry = () => {
  const [jewelryProducts, setJewelryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJewelryProducts = async () => {
      try {
        const products = await fetchJewelry();
        setJewelryProducts(products);
      } catch (error) {
        console.error("Error fetching jewelry products:", error);
      } finally {
        setLoading(false);
      }
    };

    getJewelryProducts();
  }, []);


  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Jewelry</h2>
      <div className={styles.productGrid}>
        {jewelryProducts.map(item => (
          <div key={item.id} className={styles.productCard}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p className={styles.price}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jewelry;
