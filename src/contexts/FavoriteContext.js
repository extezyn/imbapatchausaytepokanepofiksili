import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/favorites')
      .then(response => setFavorites(response.data))
      .catch(error => console.error('Error fetching favorites:', error));
  }, []);

  const addToFavorites = (product) => {
    axios.post('http://localhost:7000/favorites', product)
      .then(response => {
        setFavorites([...favorites, response.data]);
      })
      .catch(error => console.error('Error adding to favorites:', error));
  };

  const removeFromFavorites = (productId) => {
    axios.delete(`http://localhost:7000/favorites/${productId}`)
      .then(() => {
        setFavorites(favorites.filter(product => product.id !== productId));
      })
      .catch(error => console.error('Error removing from favorites:', error));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
