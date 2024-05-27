import React from 'react';
import styles from './Search.module.css';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search beers..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className={styles.searchInput}
    />
  );
}

export default Search;
