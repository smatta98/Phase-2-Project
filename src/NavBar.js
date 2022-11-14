import React from "react";
import { AppBar, Typography} from '@mui/material';
import { NavLink } from "react-router-dom";
import './NavBar.css';


function NavBar() {

    return (
        <div className="NavBar">
         
         <NavLink
        to="/"
        exact>
            <Typography>
               Home
            </Typography>
      </NavLink>
        
      <NavLink
        to="/breeds" exact>
            <Typography>
               Breeds
            </Typography>
        </NavLink>

        <NavLink
        to="/facts">
            <Typography>
               Random Facts
            </Typography> 
        </NavLink>

        </div>
    );
} 
    export default NavBar;