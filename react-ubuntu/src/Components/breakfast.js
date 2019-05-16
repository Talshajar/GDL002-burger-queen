import React, { Component } from 'react';
import { Breakfast } from "./Json/dataBreak.json";
import { Card, Button , CardContent, CardActions , Typography } from '@material-ui/core';
import Counter from '../Components/menu';

class BreakfastItem extends Component {
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
// setState y spread operator
  orders.push(order);
  console.log(this.state.orders); 
  }
  
  
    render(){ 
        return (
          <Card>
              {Breakfast.map((breakfast, index) =>
              <CardContent key={index}>
                  <Typography variant="h5" component="h2" >{breakfast.item}</Typography>
                  <Typography color="textSecondary"> {breakfast.price}</Typography>
                    <CardActions> 
                       <Counter />
                       <Button size="small" type="submit" onClick={()=>{this.submit(breakfast.item,breakfast.price);}}>Add+</Button>
                    </CardActions>
              </CardContent>
 )}  
          </Card>
)
}
}
export default BreakfastItem;