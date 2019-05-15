import React from "react";
import Navigation from "./navigation";
import BreakfastItem from "../Components/breakfast";
import LunchItem from "../Components/lunch";
import Counter from '../Components/menu';

const Order = () => (
 <div>
     <h1>hola estas en Order</h1>

     <Navigation />
     <p>Desayuno</p>
     <BreakfastItem/>
     <p>Comida</p>
     <LunchItem />
     <Counter />
     
 </div>   
);

export default Order;