import React, { useState, useEffect } from 'react';
import ProductCard from '../componetns/ProductCard';
import SearchBar from '../componetns/SearchBar';
import CategoryFilter from '../componetns/CategoryFilter';
import '../styles/Pages/catalogPage.css';
import { motion } from 'framer-motion';
import axios from 'axios';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get('http://localhost:7000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category.includes(selectedCategory) : true;
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <div className="catalog-page">
      <SearchBar setSearchQuery={setSearchQuery} />
      <CategoryFilter setSelectedCategory={handleCategoryChange} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <motion.div
          key={product.id}
          initial={{ opacity: 0 }}         
          animate={{ opacity: 1 }}         
          transition={{ duration: 0.8 }}  
          >
          <ProductCard key={product.id} product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
