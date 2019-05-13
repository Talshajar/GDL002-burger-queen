import React, { Component } from "react";
import Navigation from "./navigation";

class Dashboard extends Component {
    render () {
        return (
           <div >
            <button className="btn btn-primary btn-lg">ORDER</button>
            <button className="btn btn-secondary btn-lg">KITCHEN</button>
          <Navigation />
          </div>
        )
    }
}

export default Dashboard;