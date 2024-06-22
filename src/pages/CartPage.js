import React, { useState, useEffect } from 'react';
import ProductCard from '../componetns/ProductCard';
import '../styles/Pages/cartPage.css';
import { motion } from 'framer-motion';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/cart')
      .then(response => response.json())
      .then(data => setCart(data));
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total += product.price, 0);
  };

  return (
    <motion.div
        initial={{ opacity: 0 }}         
        animate={{ opacity: 1 }}         
        transition={{ duration: 0.8 }}>
    <div className="cart-page">
      <div className="total-price">
        <p>Amount: {getTotalPrice()} RUB</p>
      </div>
    {cart.length === 0 ? (
      <p className='empty'>EMPTY</p>
    ) : (
      <div className="product-list">
        {cart.map(product => (
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

export default CartPage;
