import React, { Component, Fragment } from 'react';
import { Breakfast } from "./Json/dataBreak.json";
import { Card, Button , CardContent, CardActions , Typography } from '@material-ui/core';
import CommandBreakfast from '../Components/CommandsBreakFast';


class BreakfastItem extends Component {
  constructor(props){
      super(props);
      this.state = {
         commands:[]
      }
       this.submit = this.submit.bind(this);
}

submit(nameItem, price){
  const order = {
    item: nameItem,
    price: price,
  }


  
// setState y spread operator

 this.setState({
    commands:[...this.state.commands, order]
  })
  
}
removeItem = (index) => {
  const newCommand = [...this.state.commands.slice(0, index), ...this.state.commands.slice(index, -1)];
  this.setState({ commands: newCommand });
}
  
    render(){ 
 
      
        return (
          
          <Fragment>
          <Card>
              {Breakfast.map((breakfast, index) =>
              <CardContent item xs={12} sm={6} key={index}>
                  <Typography variant="h5" component="h2" >{breakfast.item}</Typography>
                  <Typography color="textSecondary"> ${breakfast.price}.00</Typography>
                    <CardActions> 
                       <Button variant="contained" color="primary" type="submit" onClick={()=>{this.submit(breakfast.item,breakfast.price);}}> AÑADIR </Button>
                    </CardActions>
              </CardContent>
 )}  
          </Card>
          <Card>
          <CommandBreakfast orden={this.state.commands} removeItem={this.removeItem}/>
          </Card>
        </Fragment>


)
}
}
export default BreakfastItem;