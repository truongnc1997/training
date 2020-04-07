import React, { Component } from 'react';
import './Listchoose.css';
class ListChoose extends Component {
    render() {
        return (
            <div className="ListChoose">
                <div className = "container">
                <h2>Choose Your Best Halong Bay Cruises</h2>
                <div className="row">
                    <div className="column">
                        <a href="#">
                            <li className="col-xs-6 col-md-4">
                                <img src="https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/luxury.jpg" alt="choose luxury" />
                                <p>luxury</p>
                            </li>
                        </a>
                    </div>
                    <div className="column">
                        <a href="#">
                            <li className="col-xs-6 col-md-4">
                                <img src="https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/deluxe.jpg" alt="duluxe" />
                                <p>duluxe</p>
                            </li>
                        </a>
                    </div>
                    <div className="column">
                        <a href="#">
                            <li className="col-xs-6 col-md-4">
                                <img src="https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/budger.jpg" alt="budget" />
                                <p>budget</p>
                            </li>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="column">
                            <a href="#">
                                <li className="col-xs-6">
                                    <img src="https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/newest.jpg" alt="choose newest" />
                                    <p>newest</p>
                                </li>
                            </a>
                        </div>
                        <div className="column">
                            <a href="#">
                                <li className="col-xs-6">
                                    <img src="https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/hotdeals.jpg" alt="choose newest" />
                                    <p>best cruises</p>
                                </li>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <a href="#">
                                <li className="col-xs-6 col-md-4">
                                    <img src="https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/honeymoon.jpg" alt="choose luxury" style={{ width: '100%' }} />
                                    <p>honeymoon</p>
                                </li>
                            </a>
                        </div>
                        <div className="column">
                            <a href="#">
                                <li className="col-xs-6 col-md-4">
                                    <img src="https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/family.jpg" alt="choose luxury" style={{ width: '100%' }} />
                                    <p>family</p>
                                </li>
                            </a>
                        </div>
                        <div className="column">
                            <a href="#">
                                <li className="col-xs-6 col-md-4">
                                    <img src="https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/group.jpg" alt="choose luxury" style={{ width: '100%' }} />
                                    <p>group</p>
                                </li>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default ListChoose;