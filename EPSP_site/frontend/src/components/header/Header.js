import React from "react";

import Nav from './Nav'
import TopBar from './TopBar';

const header = () => {
  return (
    <div className='header'>
      <TopBar />
      <Nav />
    </div>
  );
};

export default header;