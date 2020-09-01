import React from 'react';
import Logo from '../../assets/logo.svg';
import './style.css';

function Navbar() {
  return (
    <header className="nav-container">
      <nav>
        <h1>Adote um Aumigo!</h1>
        <img src={Logo} alt="dog logo" className="nav-logo" />
      </nav>
    </header>
  );
}

export default Navbar;
