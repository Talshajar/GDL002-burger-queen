import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';


class Home extends Component {
  
  render () {
      return (
         <div >
       <Button variant="outlined" size="large" color="primary"><Link to="/order">Ordenar</Link></Button>
       <Button variant="outlined" size="large" color="primary"> <Link to="/kitchen">Cocina</Link></Button>
        </div>
      )
  }
}

export default Home;




