import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageOptions(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="logo-image" />
            <span className="logo-text">YOUR NAME</span>
          </Link>
        </div>

        {/* Language Selector */}
        <div className="language-selector">
          <button className="language-button" onClick={toggleLanguageOptions}>
            Language <span className="dropdown-icon">▼</span>
          </button>
          {showLanguageOptions && (
            <div className="language-options">
              <div className="language-option" onClick={() => changeLanguage('English')}>English</div>
              <div className="language-option" onClick={() => changeLanguage('Português')}>Português</div>
              <div className="language-option" onClick={() => changeLanguage('Español')}>Español</div>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/speaking" className="nav-link">Speaking</Link>
          <Link to="/about" className="nav-link">About me</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 