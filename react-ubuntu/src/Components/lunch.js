import React, { Component } from 'react';
import { Lunch } from "./Json/dataLunch.json";
import Counter from '../Components/menu';


class LunchItem  extends Component{

constructor(){
  super();
  this.state = {
    Lunch
  }
}  

    render(){
      const Lunch = this.state.Lunch.map((lunch, i) => {
        return (
          
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{lunch.item}</h5>
        <p className="card-text">{lunch.price}</p>
        <button className="btn btn-primary"> <Counter /> </button>
      </div>
    </div>
  </div>

        )
      })
      
        return(
          <div className="row">
            {Lunch}
            </div>
        );
    }

}
export default LunchItem ;