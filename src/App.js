import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componetns/Header';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FavoritesPage from './pages/FavoritesPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import FavoritesProvider from './contexts/FavoriteContext'; 
import CartProvider from './contexts/CartContext';
import './styles/main.css';

const App = () => {

  return (
    <FavoritesProvider>
    <CartProvider>
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/contact" element={< ContactPage/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
    </FavoritesProvider>
  );
};

export default App;
