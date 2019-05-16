import React from "react";
import Navigation from "./navigation";
import BreakfastItem from "../Components/breakfast";
import {Typography} from '@material-ui/core';
import ButtonBases from './viewOrder';

const ViewBreak = () => (
 <div>
     <Navigation />
     <ButtonBases />
     <Typography component="h2" variant="display3" gutterBottom>
          BREAKFAST
        </Typography>
     <BreakfastItem/>    
 </div>   
);

export default ViewBreak;