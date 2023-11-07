import React from 'react';
import './App.css';
import logo_1 from './logo_1.png';

function NAV() {
  return(
    <div className='navbar'>
      <div className='logo_1'>
        <img src={logo_1}></img>
      </div>
    <nav>
      <ul>
        Software Services
      </ul>
      <ul>
        Case Studies
      </ul>
      <ul>
        Pricing
      </ul>
      <ul>
        About US
      </ul>
      <ul>
        Blog
      </ul>
    </nav>
    <div className='contact_us'>
      <button className='c_b'>Contact Us</button>
    </div>
    </div>
  );
}

export default NAV;