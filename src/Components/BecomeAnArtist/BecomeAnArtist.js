import React, { Component } from 'react';
import './becomeAnArtist.css';

class BecomeAnArtist extends Component {
    render() {
        return (
            <div className="container">
                <div className="becomeAnArtist">
                    <div className="becomAnArtist_backgroundImgCont"></div>
                    <div className="becomAnArtist_textBtnCont">
                        <h1 className="becomAnArtist_heading">Jumpstart your passion</h1>
                        <h4 className="becomAnArtist_text">Share your talent with the world</h4>
                        <button className="becomAnArtist_btn">Become an artist</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BecomeAnArtist;