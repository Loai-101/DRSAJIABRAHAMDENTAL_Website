import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesSubmenuOpen, setIsServicesSubmenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageDropdownOpen && !event.target.closest('.language-switcher') && !event.target.closest('.menu-language-switcher')) {
        setIsLanguageDropdownOpen(false);
      }
      if (isMenuOpen && !event.target.closest('.side-menu') && !event.target.closest('.menu-toggle-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageDropdownOpen, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesSubmenuOpen(false);
  };

  const toggleServicesSubmenu = (e) => {
    e.preventDefault();
    setIsServicesSubmenuOpen(!isServicesSubmenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };


  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/b_white,f_png/v1762154428/Dr_Logo_tdakk7.ai" 
              alt="DR SAJI ABRAHAM DENTAL Logo" 
              className="header-logo-image"
            />
            <h1 className="header-title">DR SAJI ABRAHAM DENTAL</h1>
          </Link>
        </div>
        
        {/* Menu Toggle Button */}
        <button 
          className={`menu-toggle-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Side Menu Overlay */}
        {isMenuOpen && (
          <div className="side-menu-overlay" onClick={closeMenu}></div>
        )}

        {/* Side Menu */}
        <nav className={`side-menu ${isMenuOpen ? 'side-menu-open' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <div className="side-menu-header">
            <h3 className="side-menu-title">{language === 'ar' ? 'القائمة' : 'Menu'}</h3>
            <button 
              className="side-menu-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          
          <ul className="side-menu-list">
            <li className="side-menu-item">
              <Link
                to="/"
                className={`side-menu-link ${location.pathname === '/' ? 'side-menu-link-active' : ''}`}
                onClick={closeMenu}
              >
                {language === 'ar' ? 'الرئيسية' : 'HOME'}
              </Link>
            </li>
            <li className="side-menu-item">
              <Link
                to="/about"
                className={`side-menu-link ${location.pathname === '/about' ? 'side-menu-link-active' : ''}`}
                onClick={closeMenu}
              >
                {language === 'ar' ? 'من نحن' : 'ABOUT US'}
              </Link>
            </li>
            <li className="side-menu-item side-menu-item-with-submenu">
              <div className="side-menu-link-wrapper">
                <button
                  type="button"
                  className={`side-menu-link ${location.pathname === '/services' ? 'side-menu-link-active' : ''}`}
                  onClick={toggleServicesSubmenu}
                >
                  {language === 'ar' ? 'الخدمات' : 'SERVICES'}
                </button>
                <button
                  className={`submenu-toggle-btn ${isServicesSubmenuOpen ? 'active' : ''}`}
                  onClick={toggleServicesSubmenu}
                  aria-label="Toggle services submenu"
                >
                  <span className="submenu-arrow">▼</span>
                </button>
              </div>
              <ul className={`side-submenu ${isServicesSubmenuOpen ? 'side-submenu-open' : ''}`}>
                <li className="side-submenu-item">
                  <Link
                    to="/services"
                    className="side-submenu-link"
                    onClick={closeMenu}
                  >
                    ALL SERVICES
                  </Link>
                </li>
                <li className="side-submenu-item">
              <Link
                    to="/root-canal-treatment"
                    className={`side-submenu-link ${location.pathname === '/root-canal-treatment' ? 'side-submenu-link-active' : ''}`}
                    onClick={closeMenu}
              >
                    ROOT CANAL TREATMENT
              </Link>
            </li>
                <li className="side-submenu-item">
              <Link
                    to="/fixed-appliance-orthodontics"
                    className={`side-submenu-link ${location.pathname === '/fixed-appliance-orthodontics' ? 'side-submenu-link-active' : ''}`}
                    onClick={closeMenu}
              >
                    FIXED APPLIANCE ORTHODONTICS
              </Link>
            </li>
                <li className="side-submenu-item">
              <Link
                    to="/early-treatment"
                    className={`side-submenu-link ${location.pathname === '/early-treatment' ? 'side-submenu-link-active' : ''}`}
                    onClick={closeMenu}
              >
                    EARLY TREATMENT/DENTOFACIAL ORTHOPEDICS
              </Link>
            </li>
                <li className="side-submenu-item">
              <Link
                    to="/damon-system"
                    className={`side-submenu-link ${location.pathname === '/damon-system' ? 'side-submenu-link-active' : ''}`}
                    onClick={closeMenu}
              >
                    DAMON SYSTEM
              </Link>
            </li>
                <li className="side-submenu-item">
                  <Link
                    to="/clear-aligners"
                    className={`side-submenu-link ${location.pathname === '/clear-aligners' ? 'side-submenu-link-active' : ''}`}
                    onClick={closeMenu}
                >
                    CLEAR ALIGNERS
                  </Link>
                </li>
                <li className="side-submenu-item">
                  <Link
                    to="/hollywood-smile"
                    className={`side-submenu-link ${location.pathname === '/hollywood-smile' ? 'side-submenu-link-active' : ''}`}
                    onClick={closeMenu}
                >
                    HOLLYWOOD SMILE/ VENEERS
                  </Link>
                </li>
                <li className="side-submenu-item">
                  <Link
                    to="/crown-bridges"
                    className={`side-submenu-link ${location.pathname === '/crown-bridges' ? 'side-submenu-link-active' : ''}`}
                    onClick={closeMenu}
                  >
                    CROWN & BRIDGES
                  </Link>
                </li>
                <li className="side-submenu-item">
              <Link
                    to="/implant-dentistry"
                    className={`side-submenu-link ${location.pathname === '/implant-dentistry' ? 'side-submenu-link-active' : ''}`}
                    onClick={closeMenu}
              >
                    IMPLANT DENTISTRY
              </Link>
            </li>
                <li className="side-submenu-item">
              <Link
                    to="/teeth-whitening"
                    className={`side-submenu-link ${location.pathname === '/teeth-whitening' ? 'side-submenu-link-active' : ''}`}
                    onClick={closeMenu}
              >
                    TEETH WHITENING
              </Link>
                </li>
              </ul>
            </li>
            <li className="side-menu-item">
              <Link
                to="/contact"
                className={`side-menu-link ${location.pathname === '/contact' ? 'side-menu-link-active' : ''}`}
                onClick={closeMenu}
              >
                {language === 'ar' ? 'اتصل بنا' : 'CONTACT US'}
              </Link>
            </li>
            <li className="side-menu-item">
              <Link
                to="/appointment"
                className={`side-menu-link ${location.pathname === '/appointment' ? 'side-menu-link-active' : ''}`}
                onClick={closeMenu}
              >
                {language === 'ar' ? 'حجز موعد' : 'SCHEDULE AN APPOINTMENT'}
              </Link>
            </li>
            <li className="side-menu-item">
              <Link
                to="/faq"
                className={`side-menu-link ${location.pathname === '/faq' ? 'side-menu-link-active' : ''}`}
                onClick={closeMenu}
              >
                FAQ
              </Link>
            </li>
            <li className="side-menu-item">
              <Link
                to="/gallery"
                className={`side-menu-link ${location.pathname === '/gallery' ? 'side-menu-link-active' : ''}`}
                onClick={closeMenu}
              >
                {language === 'ar' ? 'معرض الحالات' : 'GALLERY OF CASES'}
              </Link>
            </li>
          </ul>
          
          {/* Menu Language Switcher */}
          <div className="menu-language-switcher">
            <button 
              className="menu-language-dropdown-btn"
              onClick={toggleLanguageDropdown}
            >
              <span className="language-icon">🌐</span>
              <span className="current-language">{language.toUpperCase()}</span>
              <span className={`dropdown-arrow ${isLanguageDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="menu-language-dropdown">
                <button 
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => selectLanguage('en')}
                >
                  EN
                </button>
                <button 
                  className={`language-option ${language === 'ar' ? 'active' : ''}`}
                  onClick={() => selectLanguage('ar')}
                >
                  AR
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
