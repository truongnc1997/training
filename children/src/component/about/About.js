import React, { Component } from 'react';
import "./About.css";
import { Button } from 'react-bootstrap';
class About extends Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
    }

    back(e) {
        e.preventDefault();
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                {/* <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">About Shop</strong>
                    </Toast.Header>
                    <Toast.Body>Proud to be 2015, 2016, 2017 & 2018 winner and awarded the Certificate of Excellence by Tripadvisor, we would like to extend my sincere thanks to all of our customers whom have trusted INSIDE TRAVEL (formerly Happy Travel) to arrange their travel.
                    </Toast.Body>
                </Toast> */}
                dm duy
                <div className="back" onClick={this.back}>
                    <Button outline color="primary">back</Button>{' '}
                </div>
            </div>
        );
    }
}

export default About;