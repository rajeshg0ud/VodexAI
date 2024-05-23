// src/components/Header.js
import React from 'react';
import './Header2.css';
import {  Search } from 'react-feather';

const Header = () => {
  return (
    <header className="headerr">
      <div className="headerr-left">
      <Search size={20} />
      </div>
      <div className="headerr-right">
        <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="Avatar" className="avatar" />
        <div className='headerr-admin'>
        <span className='a'>Admin </span>
        <span>Carolyn Perkins</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
