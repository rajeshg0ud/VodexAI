import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="nav">
      <Link className="logo" to='/'>YOUR SITE</Link>

      <div className='nav-links'>
        <Link to="/sales">About</Link>
        <Link to="/how-it-works">How it works</Link>
        <Link to="/dashboard">Pricing</Link>
      </div>

      <div className="nav-linkss">
        <Link to="/signup">LOGIN / SIGNUP</Link>
      </div>
    </nav>
  );
};

export default Header;
