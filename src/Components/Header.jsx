import React from 'react';
import logo from '../Assets/logo.png';
import search from '../Assets/search-icon.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" id="img1" />
      <span>
        <h3>TROPIKO</h3>
      </span>
      <nav className="nav-tp">
        <a href="#Home">Home</a>
        <a href="#fruit">Fruits</a>
        <a href="#service">Services</a>
        <a href="#cont">Contact us</a>
        <a href="/"><img src={search}alt="" id="searchicon" /></a>
        <button type="submit" id="btn1">GET A QUOTE</button>
      </nav>
    </header>
  );
}

export default Header;
