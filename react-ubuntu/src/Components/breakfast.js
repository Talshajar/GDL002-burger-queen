import React, { Component } from 'react';
import { Breakfast } from "./Json/dataBreak.json";
import Counter from '../Components/menu';


class BreakfastItem extends Component{

constructor(){
  super();
  this.state = {
    Breakfast
  }
}  

    render(){
      const Breakfast = this.state.Breakfast.map((breakfast, i) => {
        return (
          
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{breakfast.item}</h5>
        <p className="card-text">{breakfast.price}</p>
        <button className="btn btn-primary"> <Counter /> </button>
      </div>
    </div>
  </div>

        )
      })
      
        return(
          <div className="row">
            {Breakfast}
            </div>
        );
    }

}
export default BreakfastItem;