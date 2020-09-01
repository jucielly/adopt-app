import React from 'react';
import './assets/reset.css';
import './assets/app.css';
import Navbar from './components/NavBar';
import SearchForm from './components/SerchForm';
import DogList from "./components/DogList"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <SearchForm />
        <DogList dogs={[{
          name:"julia",
          breed: "lhasa",
          subBreed: "apso",
          gender: "female",
          age: 1
        },
        {
          name:"julia",
          breed: "lhasa",
          subBreed: "apso",
          gender: "female",
          age: 1
        }]}/>
      </main>

    </>

  );
}

export default App;
