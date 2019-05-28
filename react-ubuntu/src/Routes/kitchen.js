
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

class Kitchen extends Component {
    render () {
        return (
           <div >
                <Button><Link to="/home">Inicio</Link></Button>
          <h1>hola estas en kitchen</h1>
          </div>
        )
    }
}

export default Kitchen;