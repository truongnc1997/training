import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count: 0
        };
    }
    
    nextCount(){
        this.setState({
            count: this.state.count + 1
        });
    }

    prevCount(){
        this.setState({
            count: this.state.count - 1
        });
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <div className = "counter">
                <button onClick={ () => {this.prevCount()}}>-</button>
                <span>{this.state.count}</span>
                <button onClick = { ()=> {this.nextCount()}}>+</button>
            </div>
        );
    }
}

export default LifeCycle;