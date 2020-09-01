import React from 'react';
import Logo from '../../assets/logo.svg';
import './style.css';

function DogCard() {
  return (

    <div className="dog-card">
      <h3 className="dog-card-title">Thomas</h3>
      <img src={Logo} alt="doggo" className="card-logo" />
      <p className="dog-card-info">raça</p>
      <p className="dog-card-info">subraça</p>
      <p className="dog-card-info">macho</p>
      <p className="dog-card-info">4 anos</p>
    </div>

  );
}

export default DogCard;
