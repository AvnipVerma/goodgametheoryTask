import React from 'react';
import styles from './BeerCard.module.css';

function BeerCard({ beer }) {
  return (
    <div className={styles.beerCard}>
      <img src={beer.image} alt={beer.name} className={styles.image} />
      <h2 className={styles.name}>{beer.name}</h2>
      <p className={styles.style}>{beer.style}</p>
      <p className={styles.abv}>{beer.abv}</p>
    </div>
  );
}

export default BeerCard;
