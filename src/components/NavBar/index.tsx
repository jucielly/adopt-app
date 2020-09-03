import React from 'react';
import Logo from '../../assets/logo.svg';
import './style.css';

const Navbar = () => {
  return (

    <nav className="nav-container">
      <h1 className="nav-title">Adote um Aumigo!</h1>
      <img src={Logo} alt="dog logo" className="nav-logo" />
    </nav>

  );
}

export default Navbar;
