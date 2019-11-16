import React, { Component } from 'react';
import './HelpContact.css';
class HelpContact extends Component {
    render() {
        return (
            <div className = "HelpContact">
                <div className = "container">
                <a href = "#">
                    <img src="https://d1k2oi80tv211b.cloudfront.net/hvn/images/sup2.jpg" alt = " image help contact"></img>
                </a>
                <div className = "text-contact">
                    <span>We are Inside Travel Experts. We know our land Best.
                        <span className = "note">
                            Let us help you!
                        </span>
                    </span>
                    <p>We are always here to help you. Please kindly tell us anything about your trip: How many people, Style, Destinations, Duration, Departure date... We will send you the best offers quickly!</p>
                </div>

                <a className="btn btn-default" href="#" role="button">
                    <span>
                        <i className="far fa-envelope"></i>
                        <span>send us your request</span>
                    </span>
                </a>
                </div>
            </div>
        );
    }
}

export default HelpContact;