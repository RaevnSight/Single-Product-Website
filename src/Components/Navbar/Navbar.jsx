import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../Assets/peanut_butter_logo.png';
import cart_icon from '../Assets/shopping-cart-icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('product');

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Normie's Logo" />
        <p>NORMIE'S</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('product')}>
          <Link style={{ textDecoration: 'none' }} to="/">
            Product
          </Link>
          {menu === 'product' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('ingredients')}>
          <Link
            style={{ textDecoration: 'none' }}
            to="/ingredients">
            Ingredients
          </Link>
          {menu === 'ingredients' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('about')}>
          <Link
            style={{ textDecoration: 'none' }}
            to="/about">
            About
          </Link>
          {menu === 'about' ? <hr /> : null}
        </li>
        <li onClick={() => setMenu('contact')}>
          <Link
            style={{ textDecoration: 'none' }}
            to="/contact">
            Contact
          </Link>
          {menu === 'contact' ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Shopping Cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
