import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../componetns/ProductCard';
import '../styles/Pages/homePage.css';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);


  return (
    <div className="home-page">
        <motion.div
        initial={{ opacity: 0 }}         
        animate={{ opacity: 1 }}         
        transition={{ duration: 0.8 }}>
      <div className="product-list">
        <div className="special-card">
          <p>Георгий Александрович Рубчинский — российский дизайнер уличной одежды, фотограф и основатель одноимённого бренда. В 2016 году вошёл в список 500 самых влиятельных людей мира моды по мнению сайта Business of Fashion. С 13 декабря 2023 года — главный дизайнер американского бренда Yeezy..</p>
          <Link to="/contact">
            <button>Contact us</button>
          </Link>
        </div>
        {products.slice(0, 10).map(product => (
          <motion.div
          key={product.id}
          initial={{ opacity: 0 }}         
          animate={{ opacity: 1 }}         
          transition={{ duration: 0.8 }}>
          <ProductCard key={product.id} product={product} />
          </motion.div>
        ))}
      </div>
          </motion.div>
    </div>
  );
};

export default HomePage;
