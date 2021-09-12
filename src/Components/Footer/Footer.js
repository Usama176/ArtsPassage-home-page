import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './footer.css';
import HeadphoneIcon from '../../Assets/Icons/headphones.png';
import GroupIcon from '../../Assets/Icons/group.png';
import VerifiedIcon from '../../Assets/Icons/verified.png';
import FacebookIcon from '../../Assets/Icons/facebook.png';
import InstgramIcon from '../../Assets/Icons/instagram.png';
import TwitterIcon from '../../Assets/Icons/twitter.png';

class Footer extends Component {
    render () {
        return (
            <div className="footerContainer">
                <div className="footerBody">
                    <div className="footerSecOne">
                        <div className="footerIconTextCont">
                            <div className="iconCont">
                                <img src={HeadphoneIcon} className="footerIcon" alt=""/>
                            </div>
                            <span className="iconText">24/7 customer support</span>
                        </div>
                        <div className="footerIconTextCont">
                            <div className="iconCont">
                                <img src={GroupIcon} className="footerIcon" alt=""/>
                            </div>
                            <span className="iconText">Great artist guarantee</span>
                        </div>
                        <div className="footerIconTextCont">
                            <div className="iconCont">
                                <img src={VerifiedIcon} className="footerIcon" alt=""/>
                            </div>
                            <span className="iconText">Verified ID</span>
                        </div>
                    </div>
                    <hr className="footerDivider"/>
                    <div className="footerSecTwo">
                        <div className="footerTextLinks">
                            <div className="linkCont">
                                <h4 className="linkHeading">ArtsPassage</h4>
                                <Link to="" className="footerLink">About</Link>
                                <Link to="" className="footerLink">Contact us</Link>
                            </div>
                            <div className="linkCont">
                                <h4 className="linkHeading">Discover</h4>
                                <Link to="" className="footerLink">Trust & Safety</Link>
                                <Link to="" className="footerLink">Travel Credit</Link>
                            </div>
                            <div className="linkCont">
                                <h4 className="linkHeading">Artist</h4>
                                <Link to="" className="footerLink">Become an Artist</Link>
                                <Link to="" className="footerLink">Terms & Privacy</Link>
                            </div>
                        </div>
                        <div className="footerSocialLinksCont">
                            <div className="footerSocialLinks">
                                <a href="#">
                                    <img src={FacebookIcon} className="socialIcon" alt=""/>
                                </a>
                                <a href="#">
                                    <img src={InstgramIcon} className="socialIcon" alt=""/>
                                </a>
                                <a href="#">
                                    <img src={TwitterIcon} className="socialIcon" alt=""/>
                                </a>
                            </div>
                            <span className="footerCopyright">© ArtsPassage 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
