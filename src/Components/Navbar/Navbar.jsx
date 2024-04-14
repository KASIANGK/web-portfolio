// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react"; 
// import { useSelector, useDispatch } from 'react-redux'; 
// import { toggleDarkMode } from '../../darkModeSlice'; 
// import './Navbar.css';
// import './NavbarDark.css';

// function Navbar() {
//   const location = useLocation();
//   const dispatch = useDispatch(); 
//   const darkMode = useSelector(state => state.dark.darkMode);

//   const handleDarkModeToggle = () => {
//     dispatch(toggleDarkMode()); 
//   };

//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode.toString()); 
//   }, [darkMode]);

//   return (
//     <div className={`navbar-container ${darkMode ? 'dark-mode' : ''}`}> 
//       <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
//         <div className="logo-container">
//           {/* <img src={logo} className="logo"/> */}
//         </div>
//         <div className="navbar-content">
//           <ul className="nav-links">
//             <li className={location.pathname === '/' ? 'active' : ''}>
//               <Link to="/">HOME</Link>
//             </li>
//             <li className={location.pathname === '/menus' ? 'active' : ''}>
//               <Link to="/menus">PORTFOLIO</Link>
//             </li>
//             <li className={location.pathname === '/burgers' ? 'active' : ''}>
//               <Link to="/burgers">ABOUT</Link>
//             </li>

//             {/* Bouton Dark Mode */}
//             <li>
//               <button className="dark-mode-btn" onClick={handleDarkModeToggle}>
//                 {darkMode ? 'Light Mode' : 'Dark Mode'}
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../darkModeSlice';
import LanguageDropdown from '../../Components/Language/LanguageDropdown'; // Importez le composant LanguageDropdown
import './Navbar.css';
import './NavbarDark.css';

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.dark.darkMode);

  const [selectedLanguage, setSelectedLanguage] = useState('en'); // État pour la langue sélectionnée

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    // Ajoutez ici la logique pour changer la langue dans votre application
  };

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    // Ajoutez d'autres langues au besoin
  ];

  return (
    <div className={`navbar-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
        <div className="logo-container">{/* <img src={logo} className="logo"/> */}</div>
        <div className="navbar-content">
          <ul className="nav-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">HOME</Link>
            </li>
            <li className={location.pathname === '/menus' ? 'active' : ''}>
              <Link to="/menus">PORTFOLIO</Link>
            </li>
            <li className={location.pathname === '/burgers' ? 'active' : ''}>
              <Link to="/burgers">ABOUT</Link>
            </li>

            {/* Dropdown pour changer de langue */}
            <li>
              <LanguageDropdown
                languages={languages}
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
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
