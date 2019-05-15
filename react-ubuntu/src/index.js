import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from "react-router-dom";
import "../src/index.css";
import Home from './Routes/home';
import Order from './Routes/order';
import Kitchen from './Routes/kitchen';
import Navigation from './Routes/navigation';


const App = () => (
    <BrowserRouter>
      <React.Fragment>
            <Route path="/home" component={Home} /> 
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/order" component={Order} />
            <Route path="/navigation" component={Navigation} />
      </React.Fragment>
    </BrowserRouter>
);


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
 

