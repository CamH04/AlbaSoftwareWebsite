import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Menu.css';

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const menuItems = [
    { text: 'Home', link: '/', icon: '𓅓' },
    { text: 'APM vs APCI : What Is The Difference', link: '/article/apmvsacpi.md', icon: '💻' },
    { text: 'How to Get Into Developing An Operating system', link: '/article/startosdev.md', icon: '💻' },
    { text: 'THE FNV-1A Hash In A Command Line System In The Case Of AlbaOS', link: '/article/fnv1a.md', icon: '💻' },
    { text: 'How To Make Your Own Command For The AlbaOS ACL', link: '/article/htmyoc.md', icon: '💻' },
    { text: 'I dislike Electron and React Native and ill cry about it', link: '/article/desktopapps.md', icon: '💻' },
    { text: 'My friend doesnt like MicroPy, this is his rant', link: '/article/micropy.md', icon: '💻' },
    { text: 'Goldshadow Cybersecurity Analysis', link: '/article/cyber1.md', icon: '💻' }
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredItems = menuItems.filter(item =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
  };
  const toggleMenu = () => {
    setIsCollapsed(prevState => !prevState);
  };
  return (
    <div className="container">
      <nav className={`menu ${isCollapsed ? 'collapsed' : ''}`}>
        <button className="collapse-btn" onClick={toggleMenu}>
          {isCollapsed ? '-' : '-'}
        </button>
        <form onSubmit={handleSearchSubmit} className={`search-form ${isCollapsed ? 'collapsed' : ''}`}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={`search-input ${isCollapsed ? 'collapsed' : ''}`}
          />
          {!isCollapsed && <button type="submit">Search</button>}
        </form>
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>
                  <span className="menu-icon">{item.icon}</span>
                  {!isCollapsed && item.text}
                </Link>
              </li>
            ))
          ) : (
            <li>No Results Found</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
