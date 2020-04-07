import React, { Component } from 'react';
import './SliderShow.css';
import Slider from 'react-slick';
class SliderShow extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: true
        };
        return (
            <div>
                <h2>
                    <img src="https://www.insidevietnamtravel.com/images/icon-top10-chl.svg" alt="img slider" />
                </h2>

                <div className = "header-name">
                    <h2>lastest halong bay cruise deals</h2>
                    <p>We would like to bring you the newest deals. Save time & money - Travel more!</p>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1}>
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
                                                <span> 1. X'MAS & HAPPY NEW YEAR - UP TO 30% RECEIVING!!!
                                                </span>
                                            </div>
                                            <div className="title-offer">
                                                <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                                <span> 2. FREE D-CAR LIMOUSINE  BUS ROUNDTRIP HANOI - HALONG BAY - HANOI
                                                </span>
                                            </div>
                                            <div className="title-offer">
                                                <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                                <span> 3. FREE HANOI FOODIE TOUR!!! (value $20/pax)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*end item 1*/}

                                {/*item 2*/}
                                <div className="item fade active">
                                    <div className="image-item">
                                        <a href="#" title="President Cruise">
                                            <img src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo/orchid-cruise-341-820-440.jpg" alt="President Cruise" />
                                        </a>
                                        <div className="heart-tour"><i className="far fa-heart" /></div>
                                        <div className="sale">-20%</div>
                                        <div className="view-map">
                                            <a href="#" title="President Cruise">See all 152 photos</a>
                                            <p>All Meals Included</p>
                                        </div>
                                    </div>
                                    <div className="text-item">
                                        <div className="general-info">
                                            <div className="name-star-rv">
                                                <div className="name"><a href="#" title="President Cruise">Orchid Cruise</a></div>
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
                                                    <span className="status">VERY GOOD</span>
                                                    <span className="noreview"> - 129 Reviews</span>
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
                                                    From <span className="old-price"><del>$221</del></span>
                                                    <span className="special-price">$177</span>/p.p
                </div>
                                            </div>
                                        </div>
                                        <div className="small-line" />
                                        <div className="best-offer">
                                            <div className="title-offer">
                                                <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                                <span> 1. AMAZING CHRISTMAS DEAL - OFF 20%
                                                </span>
                                            </div>
                                            <div className="title-offer">
                                                <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                                <span> 2. EARLY BIRD - LAST MINUTES PROMOTION - UP TO  10% SAVING
                                                </span>
                                            </div>
                                            <div className="title-offer">
                                                <span style={{ color: 'orange' }}><i className="fas fa-tag" /></span>
                                                <span> 3. FREE HANOI FOODIE TOUR!!! (value $20/pax)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*end item 2*/}
                    </div>
                    <div key={2}>
                    <div className="slider">
                            <div className="main-slide">
                                {/*item 2*/}
                                <div className="item fade active">
                                    <div className="image-item">
                                        <a href="#" title="President Cruise">
                                            <img src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo/orchid-cruise-341-820-440.jpg" alt="President Cruise" />
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
                                {/*end item 2*/}

                                {/*item 3*/}
                                <div className="item fade active">
                                    <div className="image-item">
                                        <a href="#" title="President Cruise">
                                            <img src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo/paradise-grand-cruise-713-820-440.jpg" alt="President Cruise" />
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
                        </div>
                        {/*end item 3*/}
                    </div>
                    <div key={3}>
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
                        </div>
                        {/*end item 2*/}
                    </div>
                    <div key={4}>
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
                        </div>
                        {/*end item 2*/}
                    </div>
                    {/* <div key={5}>
                        <h3>5</h3>
                    </div>
                    <div key={6}>
                        <h3>6</h3>
                    </div> */}
                </Slider>
                <div style={{ textAlign: "center", display: "none" }}>
                    <button className="button" onClick={this.previous} >
                    </button>

                    <button className="button" onClick={this.next} />
                </div>
            </div>
        );
    }
}

export default SliderShow;