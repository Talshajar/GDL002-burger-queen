import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter , Route } from "react-router-dom";
import "../src/index.css";
import Order from './Routes/order';
import Kitchen from './Routes/kitchen';
import Home from './Routes/home';
import * as serviceWorker from './serviceWorker';


const App = () => (
    <HashRouter>
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/order" component={Order} />
            <Route path="/" component={Home} />
    </HashRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

serviceWorker.unregister();