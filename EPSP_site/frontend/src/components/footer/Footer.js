import React from 'react';

import Link from '../link/Link';

const footer = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>About Us</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  Aenean suscipit eget mi act fermentum phasellus vulputate
                  turpis tincidunt. Aenean suscipit eget. Aenean suscipit eget
                  mi act fermentum phasellus vulputate turpis tincidunt. Aenean
                  suscipit ege Aenean suscipit eget mi act fermentum phasellus.
                </small>
              </p>
              <button className='btn btn-sm btn-primary rounded-0'>
                Learn more
              </button>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6>Quick Links</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Acceil
                  </Link>
                </li>
                <li>
                  <Link target='about'>Présentation</Link>
                </li>
                <li>
                  <Link target='services'>Actualites</Link>
                </li>
                <li>
                  <Link target='blog'>Structure</Link>
                </li>
                <li>
                  <Link target='contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Services</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  Service Médecin de travaille
                </small>
              </p>
              <p>
                <small className='text-muted'>
                    SEMEP
                </small>
              </p>
              <p>
                <small className='text-muted'>Laboratoire / Polyclinique</small>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>Address : centre ville Djanet, DJANET</small>
              </p>
              <p className='text-muted'>
                <small>Fax : +213 (0) 123 456 789</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : epspdjanet@email.com</small>
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>EPSP DJANET© 2023 All Right Reserved. Created by Otmane LAHRECHE</small>
      </div>
    </footer>
  );
};

export default footer;