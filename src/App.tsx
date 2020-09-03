import React, { useState } from 'react'
import axios from "axios"
import './assets/reset.css';
import './assets/app.css'
import Navbar from './components/NavBar';
import SearchForm, { FormValues } from './components/SearchForm';
import DogList from "./components/DogList"
import ErrorCard from './components/ErrorCard'
import LoadingSpinner from "./components/Loadingspinner"
import { Dog } from "./components/DogCard"
import { API_URL } from "./consts/api"


const App: React.FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([])
  const [load, setLoad] = useState(false)
  const [error, setError] = useState<string>()
  const [hasSearch, setHasSearch] = useState(false)

  const handleSearch = (values: FormValues) => {
    setLoad(true)
    axios(API_URL, {
      params: {
        ...values,
        gender: values.gender === "Fêmea" ? "female" : values.gender === "Macho" ? "male" : undefined
      }
    }).then(({ data }) => {
      setError(undefined)
      setHasSearch(true)
      setDogs(data)
    })
      .catch((error) => {
        if (error.response) {
          setError("Ocorreu um erro")
        } else if (error.request) {
          setError("Verifique sua internet")
        } else {
          setError("Ocorreu algo inesperado")
        }
      })
      .finally(() => {
        setLoad(false)
      })
  }


  return (
    <>
      <Navbar />
      <main>
        <SearchForm onSearch={handleSearch} />
        {load && <LoadingSpinner />}
        {dogs.length < 1 && hasSearch && <ErrorCard message={error || "doggo não encontrado :c"} />}
        <DogList dogs={dogs} />
      </main>

    </>

  );
}

export default App;
