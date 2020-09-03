import React, { useState } from 'react'
import axios from "axios"
import './assets/reset.css';
import './assets/app.css'
import Navbar from './components/NavBar';
import SearchForm, { FormValues } from './components/SearchForm';
import DogList from "./components/DogList"
import { Dog } from "./components/DogCard"
import { API_URL } from "./consts/api"


const App: React.FC = () => {

  const [dogs, setDogs] = useState<Dog[]>([])

  const handleSearch = (values: FormValues) => {
    axios(API_URL, {
      params: {
        ...values,
        gender: values.gender === "Fêmea" ? "female" : values.gender === "Macho" ? "male" : undefined
      }
    }).then(({ data }) => setDogs(data))
  }


  return (
    <>
      <Navbar />
      <main>
        <SearchForm onSearch={handleSearch} />
        <DogList dogs={dogs} />
      </main>

    </>

  );
}

export default App;
