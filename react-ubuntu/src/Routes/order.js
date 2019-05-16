import React from "react";
import Navigation from "./navigation";
import BreakfastItem from "../Components/breakfast";
import LunchItem from "../Components/lunch";
import {Typography} from '@material-ui/core'

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
    
     
     <h1>hola estas en Order</h1>   
 </div>   
);

export default Order;