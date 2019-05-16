import React from "react";
import Navigation from "./navigation";
import LunchItem from "../Components/lunch";
import {Typography} from '@material-ui/core';

const ViewLunch = () => (
 <div>

     <Navigation />
   <h1>HOLA</h1>
     <Typography component="h2" variant="display3" gutterBottom>
          LUNCH
        </Typography>
     <LunchItem /> 
 </div>   
);

export default ViewLunch;