import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from "react-router-dom";
import Dashboard from './Components/dashboard';
import Command from './Components/command';
import Kitchen from './Components/kitchen';
import Navigation from './Components/navigation';

const App = () => (
<BrowserRouter>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/kitchen" component={Kitchen} />
    <Route path="/command" component={Command} />
    <Route path="/navigation" component={Navigation} />
</BrowserRouter>
);


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
 

