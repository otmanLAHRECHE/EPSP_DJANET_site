import React from 'react';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <CallRoundedIcon fontSize="small"/>
              <small>+213 (0) 123 456 789</small>
            </div>
            <div className='d-flex align-item-center'>
              <MailIcon fontSize="small"/>
              <small>epspdjanet@email.com</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='!#' className='text-light'>
                <FacebookIcon/>
              </a>

              <a href='!#' className='text-light'>
                <TwitterIcon/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBar;