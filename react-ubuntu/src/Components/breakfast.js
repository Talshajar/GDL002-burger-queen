import React, { Component } from 'react';
import { Breakfast } from "./Json/dataBreak.json";


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

  orders.push(order);
  console.log(order);
  
  }

    render(){

        return (
          <div>
          {Breakfast.map((breakfast, i) =>
           <div key={i}>
             <h3>{breakfast.item}</h3>
             <h5>{breakfast.price}</h5>
             <button className="btn btn-primary" type="submit" 
             onClick={()=>{this.submit(breakfast.item, breakfast.price);}}>Add+</button>
           </div>


           )}
             </div>

)
}
}
export default BreakfastItem;