import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import "../src/index.css";
import Home from './Routes/home';
import Order from './Routes/order';
import Kitchen from './Routes/kitchen';
import Navigation from './Routes/navigation';
import ButtonBases from './Routes/viewOrder';
import ViewBreak from './Routes/viewBreakfast';
import ViewLunch from './Routes/viewLunch';

const App = () => (
    <BrowserRouter>
      <Switch>
            <Route path="/home" component={Home} /> 
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/order" component={Order} />
            <Route path="/viewOrder" component={ButtonBases} />
            <Route path="/" component={Navigation} />
            <Route path="/viewBreakfast" component={ViewBreak} />
            <Route path="/viewLunch" component={ViewLunch} />
      </Switch>
    </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);