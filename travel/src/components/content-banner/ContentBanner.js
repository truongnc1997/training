import React, { Component } from 'react';
import './ContentBanner.css';
class ContentBanner extends Component {
    render() {
        return (
            <div className ="ContentBanner">
                <a href="#">
                    <img src ="https://d1k2oi80tv211b.cloudfront.net/hvn/images/hlpromo.jpg" alt="content banner"></img>
                </a>
            </div>
        );
    }
}

export default ContentBanner;