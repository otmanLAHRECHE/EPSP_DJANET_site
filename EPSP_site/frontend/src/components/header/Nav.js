import React, { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import Link from '../link/Link';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);
  const [activeNav, setActiveNav] = useState([true,false,false,false,false]);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand'>
          <span>EPSP DJANET</span>
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
            <ListItemButton selected = {activeNav[0]} className='nav-link' >
                  <ListItemText primary="Acceil"/>
              </ListItemButton>
             </li>
            <li className='nav-item'>
            <ListItemButton selected = {activeNav[1]} className='nav-link' >
                  <ListItemText primary="Présentation"/>
              </ListItemButton>
               </li>
            <li className='nav-item'>
            <ListItemButton selected = {activeNav[2]} className='nav-link' >
                  <ListItemText primary="Actualités"/>
              </ListItemButton>
            </li>
            <li className='nav-item'>
            <ListItemButton selected = {activeNav[3]} className='nav-link' >
                  <ListItemText primary="Structures"/>
              </ListItemButton>
              
            </li>
            <li className='nav-item'>
            <ListItemButton selected = {activeNav[4]} className='nav-link' >
                  <ListItemText primary="Contact"/>
              </ListItemButton>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;