import React, { Component } from 'react';
import { Lunch } from "./Json/dataLunch.json";



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
          <div>
          {Lunch.map((lunch, i) =>
           <div key={i}>
             <h3>{lunch.item}</h3>
             <h5>{lunch.price}</h5>
             <button className="btn btn-primary" type="submit" 
             onClick={()=>{this.submit(lunch.item, lunch.price);}}>Add+</button>
           </div>


           )}
             </div>

)
}
}
export default LunchItem ;






