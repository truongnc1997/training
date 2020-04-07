import React, { Component } from 'react';
import Slider from 'react-slick';
import './SlideShow.css';
class SlideShow extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="slider">
                    <div className="main-slide">
                        {/*item 1*/}
                        <div className="item fade active">
                            <div className="image-item">
                                <a href="#" title="President Cruise">
                                    <img src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo/president-cruise-546-820-440.jpg" alt="President Cruise" />
                                </a>
                                <div className="heart-tour"><i className="far fa-heart" /></div>
                                <div className="sale">-31%</div>
                                <div className="view-map">
                                    <a href="#" title="President Cruise">See all 152 photos</a>
                                    <p>All Meals Included</p>
                                </div>
                            </div>
                            <div className="text-item">
                                <div className="general-info">
                                    <div className="name-star-rv">
                                        <div className="name"><a href="#" title="President Cruise">President Cruise</a></div>
                                        <div className="clear" />
                                        <div className="star">
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                        </div>
                                        <div className="clear" />
                                        <div className="review">
                                            <span className="like-icon"><i className="fas fa-thumbs-up" /></span>
                                            <span className="status">EXCELENT</span>
                                            <span className="noreview"> - 1000000 Reviews</span>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                    <div className="sv-price">
                                        <div className="services">
                                            <span className="service-item" title="Beach"><i className="fas fa-umbrella-beach" /></span>
                                            <span className="service-item" title="Swimming pool"><i className="fas fa-swimming-pool" /></span>
                                            <span className="service-item" title="Hot tub"><i className="fas fa-hot-tub" /></span>
                                            <span className="service-item" title="Spa"><i className="fas fa-spa" /></span>
                                            <span className="service-item" title="Martini"><i className="fas fa-glass-martini-alt" /></span>
                                        </div>
                                        <div className="price">
                                            From <span className="old-price"><del>$199</del></span>
                                            <span className="special-price">$999</span>/p.p
                </div>
                                    </div>
                                </div>
                                <div className="small-line" />
                                <div className="best-offer">
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                            <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                        <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                        <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end item 1*/}

                        {/*item 2*/}
                        <div className="item fade active">
                            <div className="image-item">
                                <a href="#" title="President Cruise">
                                    <img src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo/president-cruise-546-820-440.jpg" alt="President Cruise" />
                                </a>
                                <div className="heart-tour"><i className="far fa-heart" /></div>
                                <div className="sale">-31%</div>
                                <div className="view-map">
                                    <a href="#" title="President Cruise">See all 152 photos</a>
                                    <p>All Meals Included</p>
                                </div>
                            </div>
                            <div className="text-item">
                                <div className="general-info">
                                    <div className="name-star-rv">
                                        <div className="name"><a href="#" title="President Cruise">President Cruise</a></div>
                                        <div className="clear" />
                                        <div className="star">
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                        </div>
                                        <div className="clear" />
                                        <div className="review">
                                            <span className="like-icon"><i className="fas fa-thumbs-up" /></span>
                                            <span className="status">EXCELENT</span>
                                            <span className="noreview"> - 1000000 Reviews</span>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                    <div className="sv-price">
                                        <div className="services">
                                            <span className="service-item" title="Beach"><i className="fas fa-umbrella-beach" /></span>
                                            <span className="service-item" title="Swimming pool"><i className="fas fa-swimming-pool" /></span>
                                            <span className="service-item" title="Hot tub"><i className="fas fa-hot-tub" /></span>
                                            <span className="service-item" title="Spa"><i className="fas fa-spa" /></span>
                                            <span className="service-item" title="Martini"><i className="fas fa-glass-martini-alt" /></span>
                                        </div>
                                        <div className="price">
                                            From <span className="old-price"><del>$199</del></span>
                                            <span className="special-price">$999</span>/p.p
                </div>
                                    </div>
                                </div>
                                <div className="small-line" />
                                <div className="best-offer">
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                            <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                        <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                        <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*end item 2*/}
                </div>
                <div className="slider">
                    <div className="main-slide">
                        {/*item 1*/}
                        <div className="item fade active">
                            <div className="image-item">
                                <a href="#" title="President Cruise">
                                    <img src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo/president-cruise-546-820-440.jpg" alt="President Cruise" />
                                </a>
                                <div className="heart-tour"><i className="far fa-heart" /></div>
                                <div className="sale">-31%</div>
                                <div className="view-map">
                                    <a href="#" title="President Cruise">See all 152 photos</a>
                                    <p>All Meals Included</p>
                                </div>
                            </div>
                            <div className="text-item">
                                <div className="general-info">
                                    <div className="name-star-rv">
                                        <div className="name"><a href="#" title="President Cruise">President Cruise</a></div>
                                        <div className="clear" />
                                        <div className="star">
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                        </div>
                                        <div className="clear" />
                                        <div className="review">
                                            <span className="like-icon"><i className="fas fa-thumbs-up" /></span>
                                            <span className="status">EXCELENT</span>
                                            <span className="noreview"> - 1000000 Reviews</span>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                    <div className="sv-price">
                                        <div className="services">
                                            <span className="service-item" title="Beach"><i className="fas fa-umbrella-beach" /></span>
                                            <span className="service-item" title="Swimming pool"><i className="fas fa-swimming-pool" /></span>
                                            <span className="service-item" title="Hot tub"><i className="fas fa-hot-tub" /></span>
                                            <span className="service-item" title="Spa"><i className="fas fa-spa" /></span>
                                            <span className="service-item" title="Martini"><i className="fas fa-glass-martini-alt" /></span>
                                        </div>
                                        <div className="price">
                                            From <span className="old-price"><del>$199</del></span>
                                            <span className="special-price">$999</span>/p.p
                </div>
                                    </div>
                                </div>
                                <div className="small-line" />
                                <div className="best-offer">
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                            <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                        <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                        <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end item 1*/}

                        {/*item 2*/}
                        <div className="item fade active">
                            <div className="image-item">
                                <a href="#" title="President Cruise">
                                    <img src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo/president-cruise-546-820-440.jpg" alt="President Cruise" />
                                </a>
                                <div className="heart-tour"><i className="far fa-heart" /></div>
                                <div className="sale">-31%</div>
                                <div className="view-map">
                                    <a href="#" title="President Cruise">See all 152 photos</a>
                                    <p>All Meals Included</p>
                                </div>
                            </div>
                            <div className="text-item">
                                <div className="general-info">
                                    <div className="name-star-rv">
                                        <div className="name"><a href="#" title="President Cruise">President Cruise</a></div>
                                        <div className="clear" />
                                        <div className="star">
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                            <span className="star-review"><i className="fas fa-star" /></span>
                                        </div>
                                        <div className="clear" />
                                        <div className="review">
                                            <span className="like-icon"><i className="fas fa-thumbs-up" /></span>
                                            <span className="status">EXCELENT</span>
                                            <span className="noreview"> - 1000000 Reviews</span>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                    <div className="sv-price">
                                        <div className="services">
                                            <span className="service-item" title="Beach"><i className="fas fa-umbrella-beach" /></span>
                                            <span className="service-item" title="Swimming pool"><i className="fas fa-swimming-pool" /></span>
                                            <span className="service-item" title="Hot tub"><i className="fas fa-hot-tub" /></span>
                                            <span className="service-item" title="Spa"><i className="fas fa-spa" /></span>
                                            <span className="service-item" title="Martini"><i className="fas fa-glass-martini-alt" /></span>
                                        </div>
                                        <div className="price">
                                            From <span className="old-price"><del>$199</del></span>
                                            <span className="special-price">$999</span>/p.p
                </div>
                                    </div>
                                </div>
                                <div className="small-line" />
                                <div className="best-offer">
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                            <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                        <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                    <div className="title-offer">
                                        <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                        <span>WE WOULD LIKE TO BRING YOU THE BEST DEALS. SAVE YOUR MONEY &amp; TIME
                                        <i className="fas fa-angle-down"></i>
                                        </span>
                                        <span className="down-btn" />
                                        <span className="up-btn" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*end item 2*/}
                </div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
            </Slider >
        );
    }
}
export default SlideShow;