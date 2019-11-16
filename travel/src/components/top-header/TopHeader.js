import React, { Component } from 'react';
import './TopHeader.css';
class TopHeader extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                <div className="menu-header">
                    <div className="hotline">
                        <i className="fa fa-phone-square" />
                        <strong>call us: (+84)916 952 668</strong>
                    </div>
                        <div className="best-tour">
                        <i className="fas fa-bullhorn" />
                        <span>best tour</span>
                        <em>2019</em>
                    </div>
                    <div className="logo-tour">
                        <img src="https://www.insidevietnamtravel.com/images/inside-travel-logo.png" alt="" />
                    </div>
                        <div className="menu-choise">
                        <i className="fab fa-gratipay" />
                        <span>menu</span>
                        <i className="fas fa-align-justify" />
                    </div>
                    <div className="help">
                        <img src alt="" />
                        <i className="fas fa-phone" />
                        <span>need help?</span>
                    </div>
                    <div className="clear" />
                </div>{/*menu-header*/}
                </div> {/*container*/}
            </div>
        );
    }
}

export default TopHeader;