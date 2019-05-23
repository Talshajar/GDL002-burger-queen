import React, { Component, Fragment } from 'react';
import { Breakfast } from "./Json/dataBreak.json";
import { Card, Button , CardContent, CardActions , Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CommandBreakfast from '../Components/CommandsBreakFast';
import TotalPrice from '../Components/TotalPrice'

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

  
    render(){ 
        return (
          <Fragment>
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
          <Card>
          <CommandBreakfast orden={this.state.commands} />
          <TotalPrice total={this.state.commands} />
          </Card>
        </Fragment>


)
}
}
export default BreakfastItem;