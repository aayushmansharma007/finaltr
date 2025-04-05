import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/home">Home</Link>
      <Link to="/orders">Orders Dashboard</Link>
    </nav>
  );
};

export default Navigation;