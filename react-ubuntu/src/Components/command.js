import React from "react";
import Navigation from "./navigation";
import Counter from './menu';
import Food from "./breakfast";

const Command = () => (
 <div>
     <h1>hola estas en Order</h1>

     <Navigation />
     <Food />
     <Counter />
 </div>   
);

export default Command;