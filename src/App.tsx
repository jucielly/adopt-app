import React from 'react';
import './assets/reset.css';
import './assets/app.css';
import Navbar from './components/NavBar';
import SearchForm from './components/SerchForm';

function App() {
  return (
    <>
      <Navbar />
      <main>

        <SearchForm />
      </main>
    </>

  );
}

export default App;
