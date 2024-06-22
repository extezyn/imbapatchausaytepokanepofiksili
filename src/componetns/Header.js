import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css';
import { motion } from 'framer-motion';

const Header = () => (
  <header>
    <div className='container'> 
    <motion.nav>
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/"><b>Гоша Рубчинский</b></Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/Каталог">Catalog</Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/Избранное">Favorites</Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/cart">Cart</Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/order">Заказ</Link>
      </motion.div>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link to="/contact">Контакты</Link>
      </motion.div>
    </motion.nav>
    </div>
  </header>
);

export default Header;
