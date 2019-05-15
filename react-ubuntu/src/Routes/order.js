import React from "react";
import Navigation from "./navigation";
import Counter from '../Components/menu';
import Food from "../Components/breakfast";

const Order = () => (
 <div>
     <h1>hola estas en Order</h1>

     <Navigation />
     <Food />
     <Counter />
 </div>   
);

export default Order;