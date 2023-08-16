import React, { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);
  const [activeNav, setActiveNav] = useState([true,false,false,false,false]);
  const navigate = useNavigate();

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

  

  const clickAcceil = () =>{
    setActiveNav([true,false,false,false,false]);
    navigate("/")
  };

  const clickPresentation = () =>{
    setActiveNav([false,true,false,false,false]);
    navigate("/Presentation");
  };

  const clickActualite = () =>{
    setActiveNav([false,false,true,false,false]);
    navigate("/Actualite");
  };

  const clickStructure = () =>{
    setActiveNav([false,false,false,true,false]);
    navigate("/Structure");
  };

  const clickContact = () =>{
    setActiveNav([false,false,false,false,true]);
  };


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
            <ListItemButton selected = {activeNav[0]} className='nav-link' onClick={clickAcceil}>
                  <ListItemText primary="Acceil"/>
              </ListItemButton>
             </li>
            <li className='nav-item'>
            <ListItemButton selected = {activeNav[1]} className='nav-link' onClick={clickPresentation}>
                  <ListItemText primary="Présentation"/>
              </ListItemButton>
               </li>
            <li className='nav-item'>
            <ListItemButton selected = {activeNav[2]} className='nav-link' onClick={clickActualite}>
                  <ListItemText primary="Actualités"/>
              </ListItemButton>
            </li>
            <li className='nav-item'>
            <ListItemButton selected = {activeNav[3]} className='nav-link' onClick={clickStructure}>
                  <ListItemText primary="Structures"/>
              </ListItemButton>
              
            </li>
            <li className='nav-item'>
            <ListItemButton selected = {activeNav[4]} className='nav-link' onClick={clickContact}>
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