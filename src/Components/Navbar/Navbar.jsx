import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"; 
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleDarkMode } from '../../darkModeSlice'; 
import './Navbar.css';
import './NavbarDark.css';

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch(); 
  const darkMode = useSelector(state => state.dark.darkMode);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode()); 
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString()); 
  }, [darkMode]);

  return (
    <div className={`navbar-container ${darkMode ? 'dark-mode' : ''}`}> 
      <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
        <div className="logo-container">
          {/* <img src={logo} className="logo"/> */}
        </div>
        <div className="navbar-content">
          <ul className="nav-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">HOME</Link>
            </li>
            <li className={location.pathname === '/menus' ? 'active' : ''}>
              <Link to="/menus">MENUS</Link>
            </li>
            <li className={location.pathname === '/burgers' ? 'active' : ''}>
              <Link to="/burgers">BURGERS</Link>
            </li>
            <li className={location.pathname === '/desserts' ? 'active' : ''}>
              <Link to="/desserts">DESSERTS</Link>
            </li>
            {/* Bouton Dark Mode */}
            <li>
              <button className="dark-mode-btn" onClick={handleDarkModeToggle}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
