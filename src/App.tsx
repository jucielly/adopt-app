import React, { useState } from 'react'
import axios from "axios"
import './assets/reset.css';
import './assets/app.css'
import Navbar from './components/NavBar';
import SearchForm, { FormValues } from './components/SearchForm';
import DogList from "./components/DogList"
import ErrorCard from './components/ErrorCard'
import { Dog } from "./components/DogCard"
import { API_URL } from "./consts/api"


const App: React.FC = () => {

  const [dogs, setDogs] = useState<Dog[]>([])

  const [hasSearch, setHasSearch] = useState(true)

  const handleSearch = (values: FormValues) => {
    setHasSearch(true)
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
        {dogs.length < 1 && hasSearch && <ErrorCard message="doggo não encontrado :c"/>}
        <DogList dogs={dogs} />
      </main>

    </>

  );
}

export default App;
