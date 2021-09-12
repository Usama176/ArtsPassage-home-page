import React, { Component } from 'react';
import './eventsLessons.css';

// Images
import SideIcon from '../../Assets/Icons/events_lessons_side_icon.svg';
import Icon from '../../Assets/Icons/events_lessons_icon.svg';

class EventsLessons extends Component {
    render() {
        return (
            <div className="eventsLessons">
                <div className="eventsLessons_iconContLeft">
                    <img
                      src={SideIcon}
                      alt=""
                      className="eventsLessons_iconLeft"
                    />
                </div>
                <div className="eventsLessons_textCont">
                    <div className="eventsLessons_text">
                        <h1 className="eventsLessons_textHeading">Events</h1>
                        <img
                          src={Icon}
                          alt=""
                          className="eventsLessons_icon"
                        />
                        <p className="eventsLessons_textPara">Our artists will transform your event, making it unforgettable. Choose from hundreds of artists to elevate your experience.</p>
                    </div>
                    <div className="eventsLessons_text">
                        <h1 className="eventsLessons_textHeading">Lessons</h1>
                        <img
                          src={Icon}
                          alt=""
                          className="eventsLessons_icon"
                        />
                        <p className="eventsLessons_textPara">Learn the artist's craft to become the artist. Teachers live near you and will teach you the skills you seek. Expand your boundless horizon.</p>
                    </div>
                </div>
                <div className="eventsLessons_iconContRight">
                    <img
                      src={SideIcon}
                      alt=""
                      className="eventsLessons_iconRight"
                    />
                </div>
            </div>
        );
    }
}

export default EventsLessons;