import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/footer.css';

const Footer = () => (
  <footer>
    <nav>
      <Link to="/contact">Contact</Link>
    </nav>
  </footer>
);

export default Footer;
