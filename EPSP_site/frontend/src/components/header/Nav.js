import React, { useState, useEffect } from 'react';

import Link from '../link/Link';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

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
              <Link target='home' classes='nav-link'>
                Acceil
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='about' classes='nav-link'>
                Présentation
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                Actualités
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='blog' classes='nav-link'>
                Structures
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;