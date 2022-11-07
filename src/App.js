import React, {useState, useEffect} from 'react';
import NavBar from './NavBar.js'
import logo from './logo.svg';
import { BrowswerRouter, Route, Switch } from "react-router-dom";
import './App.css';

function App() {

  const [dogImage, setDogImage] = useState(null)


  const dogData = useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setDogImage(data.message));
}, []);


return (
  <div>
     <div classname = 'NavBarContainer'>
<NavBar/>
  </div>
   <img src = {dogImage}></img>
  </div>
)

}
export default App;



