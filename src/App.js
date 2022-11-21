import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.js'
import Home from './pages/Home.js'
import Breeds from './pages/Breeds.js'
import Filter from './pages/Filter.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {

  const [breeds, setBreeds] = useState([])


  const factsData = useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message)
      })
  }, []);

  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds" element={<Breeds breeds = {Object.keys(breeds)}/>} />
        <Route path="/filter" element={<Filter breeds = {Object.keys(breeds)} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
