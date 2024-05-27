import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from '../BeerCard/BeerCard';
import Search from '../BeerCard/Search/Search';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching the beers:', error);
      });
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.Dashboard}>
      <h1>Beer List</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles.beerList}>
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
