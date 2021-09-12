import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PopularArtists.css';

// Icon
import StarRateIcon from '@material-ui/icons/StarRate';

// Images
import ViolinArtistImg from '../../Assets/Images/violin_artist.jpg';

class PopularArtists extends Component {
    render () {
        return (
            <div className="container">
                <div className="popularArtists">
                    <h1 className="popularArtists_title">Popular Artists</h1>
                    <div className="popularArtists_cardsCont">

                        <div className="popularArtists_card">
                            <div className="popularArtists_cardImgAndPriceCont">
                                <div className="popularArtists_priceCont">
                                    <span className="popularArtists_price">from <span className="popularArtists_priceLgText">$85 /</span> hr</span>
                                </div>
                                <div className="popularArtists_imgCont">
                                    <img 
                                      src={ViolinArtistImg} 
                                      alt="" 
                                      className="popularArtists_img"
                                    />
                                    <i class="heart far fa-heart"></i>
                                </div>
                            </div>
                            <div className="popularArtists_cardDescCont">
                                <Link to="">
                                    <h3 className="popularArtists_cardDescHeading">Guitarist</h3>
                                </Link>
                                <div className="popularArtists_cardDescRatingCont">
                                    <StarRateIcon className="popularArtists_cardDescRatingStar"/>
                                    <span className="popularArtists_cardDescRatingNum">0</span>
                                </div>
                                <p className="popularArtists_cardDescPara">
                                    No matter what kind of guitar lands in his hands this Texas
                                    guitar singer always makes it sing. Add his vocal and song-writing
                                    skills, and he's a triple-threat talen... 
                                    talent No matter what kind of guitar lands in his hands this Texas
                                    guitar singer always makes it sing. Add his vocal and song-writing
                                    skills, and he's a triple-threat talent
                                </p>
                            </div>
                        </div>

                        <div className="popularArtists_card">
                            <div className="popularArtists_cardImgAndPriceCont">
                                <div className="popularArtists_priceCont">
                                    <span className="popularArtists_price">from <span className="popularArtists_priceLgText">$85 /</span> hr</span>
                                </div>
                                <div className="popularArtists_imgCont">
                                    <img 
                                      src={ViolinArtistImg} 
                                      alt="" 
                                      className="popularArtists_img"
                                    />
                                    <i class="heart far fa-heart"></i>
                                </div>
                            </div>
                            <div className="popularArtists_cardDescCont">
                                <Link to="">
                                    <h3 className="popularArtists_cardDescHeading">Guitarist</h3>
                                </Link>
                                <div className="popularArtists_cardDescRatingCont">
                                    <StarRateIcon className="popularArtists_cardDescRatingStar"/>
                                    <span className="popularArtists_cardDescRatingNum">0</span>
                                </div>
                                <p className="popularArtists_cardDescPara">
                                    No matter what kind of guitar lands in his hands this Texas
                                    guitar singer always makes it sing. Add his vocal and song-writing
                                    skills, and he's a triple-threat talen... 
                                    talent No matter what kind of guitar lands in his hands this Texas
                                    guitar singer always makes it sing. Add his vocal and song-writing
                                    skills, and he's a triple-threat talent
                                </p>
                            </div>
                        </div>

                        <div className="popularArtists_card">
                            <div className="popularArtists_cardImgAndPriceCont">
                                <div className="popularArtists_priceCont">
                                    <span className="popularArtists_price">from <span className="popularArtists_priceLgText">$85 /</span> hr</span>
                                </div>
                                <div className="popularArtists_imgCont">
                                    <img 
                                      src={ViolinArtistImg} 
                                      alt="" 
                                      className="popularArtists_img"
                                    />
                                    <i class="heart far fa-heart"></i>
                                </div>
                            </div>
                            <div className="popularArtists_cardDescCont">
                                <Link to="">
                                    <h3 className="popularArtists_cardDescHeading">Guitarist</h3>
                                </Link>
                                <div className="popularArtists_cardDescRatingCont">
                                    <StarRateIcon className="popularArtists_cardDescRatingStar"/>
                                    <span className="popularArtists_cardDescRatingNum">0</span>
                                </div>
                                <p className="popularArtists_cardDescPara">
                                    No matter what kind of guitar lands in his hands this Texas
                                    guitar singer always makes it sing. Add his vocal and song-writing
                                    skills, and he's a triple-threat talen... 
                                    talent No matter what kind of guitar lands in his hands this Texas
                                    guitar singer always makes it sing. Add his vocal and song-writing
                                    skills, and he's a triple-threat talent
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default PopularArtists;