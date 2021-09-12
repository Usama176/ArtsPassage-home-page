import React, { Component } from 'react';
import './homePageTopSec.css';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


// Icons
import Calender from '../../Assets/Icons/calendar.svg';
import Search from '../../Assets/Icons/search.svg';
import SearchTalent from '../../Assets/Icons/search_talent.svg';
import MapMarker from '../../Assets/Icons/map_marker.svg';
import Arrow from '../../Assets/Icons/indicator_arrow.svg';

class HomePageTopSec extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
    };
  }

  render () {
      return (
          <div className="homePageTopSec">
              <div className="homePageTopSec_shadowEffectTop"></div>
              <div className="homePageTopSec_background">
                  <div className="homePageTopSec_content">
                      <div className="homePageTopSec_titleAndSearchBarCont">
                          <span className="homePageTopSec_searchBarHeading">Find Artists:</span>
                          <div className="homePageTopSec_searchBar">
                              <div className="homePageTopSec_searchBarInputCont">
                                  <img
                                    src={SearchTalent}
                                    alt=""
                                    className="homePageTopSec_searchBarInputIcons"
                                  />
                                  <input
                                    type="text"
                                    placeholder="Search Talent"
                                    className="homePageTopSec_searchBarInput"
                                  />
                              </div>
                              <div className="homePageTopSec_searchBarInputCont">
                                  <img
                                    src={MapMarker}
                                    alt=""
                                    className="homePageTopSec_searchBarInputIcons"
                                  />
                                  <input
                                    type="text"
                                    placeholder="Enter Location"
                                    className="homePageTopSec_searchBarInput"
                                  />
                              </div>
                              <div className="homePageTopSec_searchBarInputCont">
                                  <img
                                    src={Calender}
                                    alt=""
                                    className="homePageTopSec_searchBarInputIcons"
                                  />
                                  <ReactDatePicker
                                    selected={this.state.startDate}
                                    onChange={(date) => this.setState({startDate: date})}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="time"
                                    dateFormat="MMM d, yyyy h:mm aa"
                                    placeholderText="Date"
                                    className="homePageTopSec_searchBarInput homePageTopSec_searchBarDateInput"
                                  />
                              </div>
                              <div className="homePageTopSec_searchBarSelectCont">
                                  <select className="homePageTopSec_searchBarSelect">
                                      <option style={{display:'none'}}>Events or Lesson?</option>
                                      <option value="events">Events</option>
                                      <option value="lessons">Lessons</option>
                                  </select>
                                  <img
                                    src={Arrow}
                                    alt=""
                                    className="homePageTopSec_searchBarSelectIcon"
                                  />
                              </div>
                              <div className="homePageTopSec_searchBarSearchBtnCont">
                                  <button className="homePageTopSec_searchBarSearchBtn">
                                      <img
                                        src={Search}
                                        alt=""
                                        className="homePageTopSec_searchBarSearchBtnIcon"
                                      />
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="homePageTopSec_shadowEffectBottom"></div>
          </div>
      );
  }
}

export default HomePageTopSec;