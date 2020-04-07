import React, { Component } from 'react';

class CreatRef extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.CreatRef;  
        setTimeout(() => {
            this.inputElement.current.focus();
        }, 2000);
   }
    render() {
        return (
            <div className = "CreatRef">
                < input type = "text"  ref = {this.inputElement}/>
            </div>
        );
    }

}

export default CreatRef;