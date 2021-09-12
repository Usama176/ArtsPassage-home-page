import React, {Component } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

// Image
import Logo from '../../Assets/Images/artspassage_logo.png'

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }
  
  render() {

    const handleClick = () => this.setState({ click: !this.state.click });

    return (          
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="navbar_logoCont">
                        <Link exact to="/">
                            <img
                            src={Logo}
                            alt=""
                            className="navbar_logo"
                            />
                        </Link>
                    </div>
                    <div className={this.state.click ? "navbar_linksCont active" : "navbar_linksCont"}>
                       
                        <div className="navbar_singleLinkCont">
                            <Link
                              exact
                              to=""
                              className="navbar_link"
                            >
                            Become an Artist
                            </Link>
                        </div>
                        <div className="navbar_linksBtnCont">
                            <Link
                              exact
                              to=""
                              className="navbar_linkBtn linkSignupBtn"
                            >
                            Sign up
                            </Link>

                            <Link
                              exact
                              to=""
                              className="navbar_linkBtn linkLoginBtn"
                            >
                            Login
                            </Link>
                        </div>
                    </div>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={this.state.click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
  }
}

export default Navbar;