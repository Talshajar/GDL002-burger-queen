import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import "../src/index.css";
import Home from './Routes/home';
import Order from './Routes/order';
import Kitchen from './Routes/kitchen';
import Navigation from './Routes/navigation';
import Firebase from 'firebase';

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCN9aspJu6lvfLhQCJRxA3DhES4A55xXuw",
    authDomain: "burgerqueen-85856.firebaseapp.com",
    databaseURL: "https://burgerqueen-85856.firebaseio.com",
    projectId: "burgerqueen-85856",
    storageBucket: "burgerqueen-85856.appspot.com",
    messagingSenderId: "171137380174",
    appId: "1:171137380174:web:cf072f9b4ce8db8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

const App = () => (
    <BrowserRouter>
      <Switch>
            <Route path="/home" component={Home} /> 
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