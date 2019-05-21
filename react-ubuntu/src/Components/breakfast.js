import React, { Component } from 'react';
import { Breakfast } from "./Json/dataBreak.json";
import { Card, Button , CardContent, CardActions , Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class BreakfastItem extends Component {
  constructor(props){
      super(props);
      this.state = {
         Breakfast,
         commands:[]
      }
       this.submit = this.submit.bind(this);
}
submit(nameItem, price){
  const order = {
    item: nameItem,
    price: price
  }
// setState y spread operator

 this.setState({
    commands:[...this.state.commands, order]
  }, ()=> console.log(this.state.commands)
  )
}

  
    render(){ 
        return (
          <Card>
              {Breakfast.map((breakfast, index) =>
              <CardContent key={index}>
                  <Typography variant="h5" component="h2" >{breakfast.item}</Typography>
                  <Typography color="textSecondary"> {breakfast.price}</Typography>
                    <CardActions> 
                       <Button size="small" type="submit" onClick={()=>{this.submit(breakfast.item,breakfast.price);}}> <AddIcon /> </Button>
                    </CardActions>
              </CardContent>
 )}  
          </Card>
)
}
}
export default BreakfastItem;