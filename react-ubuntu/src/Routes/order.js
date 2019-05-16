import React from "react";
import Navigation from "./navigation";
import BreakfastItem from "../Components/breakfast";
import LunchItem from "../Components/lunch";
import Counter from '../Components/menu';

const Order = () => (
 <div>
     <Navigation />
     <p>Desayuno</p>
     <BreakfastItem/>
     <p>Comida</p>
     <LunchItem />
     <Counter />
     
     <h1>hola estas en Order</h1>   
 </div>   
);

export default Order;