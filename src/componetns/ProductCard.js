import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoriteContext';
import '../styles/components/productCard.css';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

  const isFavorite = favorites.some(favorite => favorite.id === product.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <motion.div
          className="product-card"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}>
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} RUB</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove' : 'Add'}
      </button>
      <Link to={`/product/${product.id}`}>
        <button>More</button>
      </Link>
    </div>
    </motion.div>
  );
};

export default ProductCard;
