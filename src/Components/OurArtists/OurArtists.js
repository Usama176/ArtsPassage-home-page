import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './OurArtists.css';

// Image
import BalletDancer from '../../Assets/Images/ballet_dancer.jpg';
import Circle from '../../Assets/Icons/circle.svg';

class OurArtists extends Component {
    render() {
        return (
            <div className="ourArtists">
                <span className="ourArtists_title">Our Artists:</span>
                <div className="ourArtists_cardsCont">

                    <div className="ourArtists_card">
                        <div className="ourArtists_cardTitleCont">
                            <Link 
                              to=""
                              className="ourArtists_cardTitle"
                            >
                                <span>Ballet Dancer</span>
                            </Link>
                        </div>
                        <div className="ourArtists_cardImgCont">
                            <img
                              src={BalletDancer}
                              alt=""
                              className="ourArtists_cardImg"
                            />
                        </div>
                    </div>
                    
                    <div className="ourArtists_card">
                        <div className="ourArtists_cardTitleCont">
                            <Link 
                              to=""
                              className="ourArtists_cardTitle"
                            >
                                <span>Ballet Dancer</span>
                            </Link>
                        </div>
                        <div className="ourArtists_cardImgCont">
                            <img
                              src={BalletDancer}
                              alt=""
                              className="ourArtists_cardImg"
                            />
                        </div>
                    </div>

                    <div className="ourArtists_card">
                        <div className="ourArtists_cardTitleCont">
                            <Link 
                              to=""
                              className="ourArtists_cardTitle"
                            >
                                <span>Ballet Dancer</span>
                            </Link>
                        </div>
                        <div className="ourArtists_cardImgCont">
                            <img
                              src={BalletDancer}
                              alt=""
                              className="ourArtists_cardImg"
                            />
                        </div>
                    </div>

                    <div className="ourArtists_card">
                        <div className="ourArtists_cardTitleCont">
                            <Link 
                              to=""
                              className="ourArtists_cardTitle"
                            >
                                <span>Ballet Dancer</span>
                            </Link>
                        </div>
                        <div className="ourArtists_cardImgCont">
                            <img
                              src={BalletDancer}
                              alt=""
                              className="ourArtists_cardImg"
                            />
                        </div>
                    </div>

                    <div className="ourArtists_card">
                        <div className="ourArtists_cardTitleCont">
                            <Link 
                              to=""
                              className="ourArtists_cardTitle"
                            >
                                <span>Ballet Dancer</span>
                            </Link>
                        </div>
                        <div className="ourArtists_cardImgCont">
                            <img
                              src={BalletDancer}
                              alt=""
                              className="ourArtists_cardImg"
                            />
                        </div>
                    </div>

                    <div className="ourArtists_card">
                        <div className="ourArtists_cardTitleCont">
                            <Link 
                              to=""
                              className="ourArtists_cardTitle"
                            >
                                <span>Ballet Dancer</span>
                            </Link>
                        </div>
                        <div className="ourArtists_cardImgCont">
                            <img
                              src={BalletDancer}
                              alt=""
                              className="ourArtists_cardImg"
                            />
                        </div>
                    </div>

                    <div className="ourArtists_card">
                        <div className="ourArtists_cardTitleCont">
                            <Link 
                              to=""
                              className="ourArtists_cardTitle"
                            >
                                <span>Ballet Dancer</span>
                            </Link>
                        </div>
                        <div className="ourArtists_cardImgCont">
                            <img
                              src={BalletDancer}
                              alt=""
                              className="ourArtists_cardImg"
                            />
                        </div>
                    </div>

                    <div className="ourArtists_card">
                        <div className="ourArtists_cardTitleCont">
                            <Link 
                              to=""
                              className="ourArtists_cardTitle"
                            >
                                <span>Ballet Dancer</span>
                            </Link>
                        </div>
                        <div className="ourArtists_cardImgCont">
                            <img
                              src={BalletDancer}
                              alt=""
                              className="ourArtists_cardImg"
                            />
                        </div>
                    </div>


                    {/* small stylish circle icon */}
                    <div className="ourArtists_circleIconCont">
                        <img
                          src={Circle}
                          alt=""
                          className="ourArtists_circleIcon"
                        />
                    </div>
                </div>
                <div className="ourArtists_linkCont">
                    <Link 
                      to="" 
                      className="ourArtists_link"
                    >
                        See all types
                    </Link>
                </div>
            </div>
        );
    }
}

export default OurArtists;