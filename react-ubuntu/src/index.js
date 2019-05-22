import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import "../src/index.css";
import Order from './Routes/order';
import Kitchen from './Routes/kitchen';
import Navigation from './Routes/navigation';


const App = () => (
    <BrowserRouter>
      <Switch>
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/order" component={Order} />
            <Route path="/" component={Navigation} />
            
      </Switch>
    </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);