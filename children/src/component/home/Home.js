import React, { Component, useState } from 'react';
import './Home.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { ButtonToolbar, Button, Container, Table, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTab: [
                {
                    name: "Danh mục sản phẩm"
                },
                {
                    name: "Trang chủ"
                },
                {
                    name: "tin tức"
                },
                {
                    name: "giày thể thao nam"
                },
                {
                    name: "giày thể thao nữ"
                },
                {
                    name: "giày thể thao trẻ em"
                },
            ]
        };
    }

    render() {
        const { nameTab } = this.state;
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <Container>
                        <a className="name-shop" href="#page-top">
                            <Link to="/">Shop Giày</Link>
                        </a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto my-2 my-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" >
                                        <Link to="/about/">
                                            About
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger">
                                        <Link to="/services/">Services</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger">
                                        <Link to="/protfolio/">
                                            Portfolio
                                    </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger">
                                        <Link to="/contact/">Contact</Link>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </nav>
                {/* <div className="top-banner">
                    <Container>
                        <div className="introduce">
                            <span>Trùm giày thể thao Adidas, Nike Kids-Capvirgo.com</span>
                        </div>
                        <div className="righ">
                            <div className="hour-work">
                                Thứ 2-CN: 8h-21h
                            </div>
                            <div className="hotline">
                                <i className="fas fa-phone-square-alt"></i>
                                <ButtonToolbar>
                                    <Button variant="primary">
                                        09811219199
                                    </Button>
                                </ButtonToolbar>

                            </div>
                        </div>
                    </Container>
                    <div className="clear"></div>
                </div>
                <div className="main-header">
                    <Container>
                        <div className="logo">
                            <span>
                                Giày Xinh
                            </span>
                        </div>
                        <div className="seach">
                            <input type="text" placeholder="tìm kiếm sản phẩm"></input>
                            <Button>Tìm kiếm</Button>
                        </div>

                        <div className="clear"></div>
                        <div className="choised-product">
                            <div className="card">
                                Giỏ hàng của bạn
                            </div>
                        </div>
                        <div className="clear"></div>
                    </Container>
                </div>
                <div className="name-tab">
                    <Container>
                        <Row>
                            {
                                nameTab.map(name2 => (
                                    <Col sm="2">
                                        <span>{name2.name}</span>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </div> */}
            </div >
        );
    }
}

export default Home;