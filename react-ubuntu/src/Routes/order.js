import React from "react";
import Navigation from "./navigation";
import { Typography } from '@material-ui/core';
import BreakfastItem from './src/Components/breakfast';
import LunchItem from './src/Components/lunch';



const Order = () => (
 <div>
     <Navigation />

     <Typography component="h2" variant="display3" gutterBottom>
          BREAKFAST
        </Typography>
     <BreakfastItem/> 

     <Typography component="h2" variant="display3" gutterBottom>
          LUNCH
        </Typography>
     <LunchItem /> 

 </div>   
);

export default Order;