import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/article/htmyoc.md">How To Make Your Own Command For The AlbaOS ACL</Link></li>
        <li><Link to="/article/startosdev.md">How to Get Into Developing An Operating system</Link></li>
        <li><Link to="/article/fnv1a.md">THE FNV-1A Hash In A Command Line System In The Case Of AlbaOS</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
