import React, { Component } from 'react';

class Children extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete : true
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.setState({
            isComplete: !this.state.isComplete
        });
    }
    render() {
        const { heading, children } = this.props;
        const { isComplete } = this.state;
        return (
            <div className = "Children">
                <div className = "heading" onClick = {this.onClick}>
                    <a href = "#">
                    { heading }
                    </a>
                </div>
                 { !isComplete && <div className = "content">
                    { children }
                </div>}
            </div>
        );
    }
}

export default Children;