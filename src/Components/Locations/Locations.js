import React, { Component } from 'react';
import Slider from "react-slick";
import './locations.css';

// Icon
import Birdicon from '../../Assets/Icons/bird.svg';
import Chevron from '../../Assets/Icons/chevron.svg';

class Locations extends Component {

    // For custom next button
    // Copied from react slick documentation
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

        // Defined settings for react slick
        const settings = {
            infinite: true,
            centerPadding: "6px",
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 550,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 350,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      rows: 2,
                    }
                },
            ],
        };

        return (
            <div className="locationsCont">
                <div className="locations">
                    <span className="locations_title">Locations:</span>
                    <div className="locations_contentCont">
                        <div className="locations_contentMap">
                            <div className="locations_contentMapCardLg"></div>
                            <div className="locations_sliderAndBtnCont">
                                <div className="locations_sliderCont">

                                    <Slider  ref={c => (this.slider = c)} {...settings}>
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>     
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>
                                        <div className="locations_slides">
                                            <span className="locations_slidesText">Coming soon</span>
                                        </div>
                                    </Slider>

                                </div>
                                <button onClick={this.next} className="locations_silderBtn">
                                    <img
                                      src={Chevron}
                                      alt=""
                                      class="locations_silderBtnIcon"
                                    />
                                </button>
                            </div>
                        </div>
                        
                        <div className="locations_contentBirdIconCont">
                            <img
                              src={Birdicon}
                              alt=""
                              className="locations_contentBirdIcon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Locations;