import React from 'react';
import '../styles/components/categoryFilter.css';

const categories = ['MEN', 'WOMEN', 'SHOES', 'ACCESSORIES', 'NEW'];

const CategoryFilter = ({ setSelectedCategory }) => {
  return (
    <div className="category-filter">
      <button className='all-button' onClick={() => setSelectedCategory('')}>ALL</button>
      {categories.map(category => (
        <button className='abutton'  key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
