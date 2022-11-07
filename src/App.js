import React, {useState, useEffect} from 'react';
import NavBar from './NavBar.js'
import Home from './Home.js'
import Breeds from './Breeds.js'
import logo from './logo.svg';
import { BrowswerRouter, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  
return (
  <div>
    <div classname = 'NavBarContainer'>
    <NavBar/>
    </div>
    <Switch>
      <Route exact path = "/"></Route>
      <Home/>
    </Switch>

    <Switch>
      <Route exact path = "/breeds"></Route>
      <Breeds />
    </Switch>

    {/* <Switch>
      <Route exact path = "/facts"></Route>
      <Facts/>
    </Switch> */}
  </div> 
)

}
export default App;



{/* <div>
<Navbar setIsLoggedIn={setIsLoggedIn} />
<Switch>
  <Route exact path="/about">
    <About />
  </Route>
  <Route exact path="/login">
    <Login setIsLoggedIn={setIsLoggedIn} />
  </Route>
  <Route exact path="/">
    <Home isLoggedIn={isLoggedIn} />
  </Route>
</Switch>
</div> */}