import React, {useState, useEffect} from 'react';
import NavBar from './NavBar.js'
import Home from './pages/Home.js'
import Breeds from './pages/Breeds.js'
import Filter from './pages/Filter.js'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  

  return (
  <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/breeds" element={<Breeds />} />
        <Route path = "/filter" element = {<Filter />} />
      </Routes>
    </BrowserRouter>
)

}
export default App;






