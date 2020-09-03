import React from 'react';
import Logo from '../../assets/logo.svg';
import './style.css';
import DogCard, { Dog } from "../DogCard"

type DogListProps = {
  dogs: Dog[]
}

const DogList: React.FC<DogListProps> = ({ dogs }) => (

  <section className="dog-list">
    {
      dogs.map((dog, index) => <DogCard dog={dog} key={index} />, console.log("foi"))
    }

  </section>

);

export default DogList;
