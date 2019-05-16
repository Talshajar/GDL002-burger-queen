import React, { Component } from 'react';
import { Lunch } from "./Json/dataLunch.json";
import { Card, Button , CardContent, CardActions , Typography } from '@material-ui/core';


class LunchItem  extends Component{
  constructor(props){
    super(props);
    this.state = {
       orders:[]
    }
     this.submit = this.submit.bind(this);
}
submit(nameItem, price){
  const orders = this.state.orders;
  const order = {
    item: nameItem,
    price: price
  }
  
  orders.push(order);
  console.log(order);
  
  }
    render(){
        return (
          <Card>
          {Lunch.map((lunch, index) =>
          <CardContent key={index}>
              <Typography variant="h5" component="h2" >{lunch.item}</Typography>
              <Typography color="textSecondary">{lunch.price}</Typography>
                <CardActions> 
                   <Button size="small" type="submit" onClick={()=>{this.submit(lunch.item,lunch.price);}}>Add+</Button>
                </CardActions>
          </CardContent>
)}  
      </Card>
)
}
}
export default LunchItem ;






