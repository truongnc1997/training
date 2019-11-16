import React, { Component } from 'react';
import './TopBanner.css';
import ImgTopBanner from './top.banner.jpg';
class TopBanner extends Component {
    render() {
        return (
            <div className="top-banner">
                <img src = {ImgTopBanner} alt=""/>
            </div>
        );
    }
}

export default TopBanner;