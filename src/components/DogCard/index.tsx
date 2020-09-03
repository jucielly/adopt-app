import React, { useState, useEffect } from 'react';
import axios from "axios"
import Logo from '../../assets/logo.svg';
import './style.css';
import { IMAGE_API_URL } from "../../consts/api"

export type Dog = {
  id: number
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

const genders = {
  male: "macho",
  female: "fêmea"
}

const genderIcons = {
  male: <i className="fas fa-mars"></i>,
  female: <i className="fas fa-venus"></i>
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  const {
    name, breed, subBreed, gender, age, id
  } = dog;

  const [image, setImage] = useState<string>()

  useEffect(() => {
    setImage(undefined)
    axios(IMAGE_API_URL.replace(":breed", breed))
      .then(({ data }) => setImage(data.message))
  }, [id])

  return (

    <div className="dog-card">
      <h3 className="dog-card-title"><i className="fas fa-paw"></i>{name}</h3>
      <img src={image || Logo} alt="doggo" className="card-logo" />
      <p className="dog-card-info">Raça: {breed} {subBreed && `| ${subBreed}`}</p>
      <p className="dog-card-info">{genderIcons[gender]}{genders[gender]}</p>
      <p className="dog-card-info">{age} anos</p>
    </div>

  );
};

export default DogCard;
