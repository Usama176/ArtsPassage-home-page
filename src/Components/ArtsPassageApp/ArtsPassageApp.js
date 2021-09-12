import React, { Component } from 'react';
import './artsPassageApp.css';

// Images
import AppStoreIcon from '../../Assets/Icons/app_store.webp';
import PlayStore from '../../Assets/Icons/play_store.png';
import PhoneHandIcon from '../../Assets/Icons/Phone-Hand.png';

class ArtsPassageApp extends Component {
    render () {
        return (
            <div className="artsPassageApp">
                <div className="artsPassageApp_textAndLinkCont">
                    <span className="artsPassageApp_heading">App coming soon</span>
                    <div className="artsPassageApp_linkCont">
                        {/* Link */}
                        <a className="artsPassageApp_link">
                            <img 
                              src={AppStoreIcon}
                              alt=""
                              className="artsPassageApp_linkAppStoreIcon"
                            />
                        </a>
                        {/* Link */}
                        <a className="artsPassageApp_link">
                            <img 
                              src={PlayStore}
                              alt=""
                              className="artsPassageApp_linkPlayStoreIcon"
                            />
                        </a>
                    </div>
                </div>
                <div className="artsPassageApp_imgCont">
                    <img 
                      src={PhoneHandIcon}
                      alt=""
                      className="artsPassageApp_img"
                    />
                </div>
            </div>
        );
    }
}

export default ArtsPassageApp;