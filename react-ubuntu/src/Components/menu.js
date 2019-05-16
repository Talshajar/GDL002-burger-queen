import React, { Component } from 'react'
import { Button } from '@material-ui/core';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div className="center">
                <p>{this.state.count}</p> 
                <Button size="small" onClick={this.handleIncrement}>Pieces</Button>
            </div>
        );
    };
};

export default Counter