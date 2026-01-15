import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={`${styles.productCard} ${!product.inStock ? 'outOfStockClass' : ''}`}>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>{product.price}</p>
      <p className={`${styles.productStatus} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button className={styles.removeButton} onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;

