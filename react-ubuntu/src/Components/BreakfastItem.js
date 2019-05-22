import React from 'react';
import { Breakfast } from "./Json/dataBreak.json";
import { Button , CardContent, CardActions , Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const BreakfastItem = () => {

    return Breakfast.map((breakfast, index) => {
        return (
        <CardContent key={index}>
            <Typography variant="h5" component="h2" >{breakfast.item}</Typography>
            <Typography color="textSecondary"> {breakfast.price}</Typography>
              <CardActions> 
                 <Button size="small" type="submit" onClick={()=>{this.props.handler(breakfast.item,breakfast.price);}}> <AddIcon /> </Button>
              </CardActions>
        </CardContent>
        );
    });
};

export default BreakfastItem;