import React, { Component } from 'react';
import './WhyBookUs.css';
class WhyBookUs extends Component {
    render() {
        return (
            <div className="why-book-us">
                <div className="container">
                    <div className="why-book">
                        <li href="#" className="active"> 
                            <span>why travel</span>
                            <br />    
                            <span>with us?</span>
                        </li>
                        <a href="#"> 
                            <i className="fas fa-check-square" />
                            <span>fully bonded </span>
                            <br />
                            <span>travel company</span> 
                        </a>
                        <a href="#"> 
                            <i className="far fa-star" />
                            <span>best value</span>
                            <br />
                            <span>unique experiences</span> 
                        </a>
                        <a href="#"> 
                            <i className="far fa-money-bill-alt" />
                            <span>best price guarantee </span>
                            <br />
                            <span>special offers</span>
                        </a>
                        <a href="#"> 
                            <i className="fas fa-ticket-alt" />
                            <span>excellent certificate</span>
                            <br />
                            <span>by tripadvisor</span>
                        </a>
                        <a href="#"> 
                            <i className="far fa-heart" />
                            <span>local experts </span>
                            <br /> 
                            <span>best support 24/7</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhyBookUs;