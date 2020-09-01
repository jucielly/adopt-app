import React from 'react';
import Logo from '../../assets/logo.svg';
import './style.css';
import { type } from 'os';

export type Dog = {
  name: string
  breed: string
  subBreed: string
  gender: 'female' | 'male'
  age: number
  image?: string
}

type DogCardProps = {
  dog: Dog
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  const {
    name, breed, subBreed, gender, age,
  } = dog;
  return (

    <div className="dog-card">
      <h3 className="dog-card-title">{name}</h3>
      <img src={Logo} alt="doggo" className="card-logo" />
      <p className="dog-card-info">{breed}</p>
      <p className="dog-card-info">{subBreed}</p>
      <p className="dog-card-info">{gender}</p>
      <p className="dog-card-info">{age} anos</p>
    </div>

  );
};

export default DogCard;
