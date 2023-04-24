import logo from './logo.png';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Header() {
  return (
    <div className='flex flex-col w-full md:flex-row md:justify-between md:items-center bg-[#fff]'>
      <nav className='flex justify-between items-center px-4 py-3 w-full md:px-7'>
        <div className='flex gap-2'>
          <img className='h-auto w-20' src={logo} alt="ClearDocs logo with a capital letter C and capital letter D" />
          <title class="App-header">ClearDocs</title>
        </div>
        <ul className='flex flex-col md:flex-row md:items-end list-none gap-3 text-lg'>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: '#000000' }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none', color: '#000000' }}>About</Link>
          </li>
          <li>
            <Link to="/image-pdf-ocr" style={{ textDecoration: 'none', color: '#000000' }}>Get Started</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
