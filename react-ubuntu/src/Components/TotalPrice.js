import React, { Component } from 'react'

class TotalPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
    };

    handleTotal = () => {
        this.setState({
            total: this.state.total.reduce((sum, props) => (typeof props.price === "number" ? sum + props.price : sum), 0)
        });
    };


    render() {
        return (
            <div className="center">
                <p>{this.state.total}</p>
                <button onClick={this.handleTotal}>TOTAL</button>
            </div>
        );
    };
};

export default TotalPrice