import React, { useState, useEffect } from 'react';
import ProductCard from '../componetns/ProductCard';
import '../styles/Pages/favoritesPage.css';
import { motion } from 'framer-motion'; 

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/favorites')
      .then(response => response.json())
      .then(data => setFavorites(data));
  }, []);

  return (
    <motion.div
        initial={{ opacity: 0 }}         
        animate={{ opacity: 1 }}         
        transition={{ duration: 0.8 }}>
    <div className="favorites-page">
      {favorites.length === 0 ? (
        <p className='empty'>EMPTY</p>
      ) : (
        <div className="product-list">
          {favorites.map(product => (
          <motion.div
            className="product-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <ProductCard key={product.id} product={product} />
          </motion.div>
          ))}
        </div>
      )}
    </div>
    </motion.div>
  );
};

export default FavoritesPage;
