// src/DashboardPage.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header2';
import Dashboard from './Dashboard';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
