import React, {Component} from 'react';
import './home.css';

// Components
import BookOurArtists from '../../Components/BookOurArtists/BookOurArtists';
import BecomeAnArtist from '../../Components/BecomeAnArtist/BecomeAnArtist';
import PopularArtists from '../../Components/PopularArtists/PopularArtists';
import ArtsPassageApp from '../../Components/ArtsPassageApp/ArtsPassageApp';
import EventsLessons from '../../Components/EventsLessons/EventsLessons';
import HomePageTopSec from '../../Components/HomePageTopSection/HomePageTopSec';
import OurArtists from '../../Components/OurArtists/OurArtists';
import WeAreArtspassage from '../../Components/WeAreArtsPassage/WeAreArtspassage';
import Footer from '../../Components/Footer/Footer';
import Locations from '../../Components/Locations/Locations';

class Home extends Component {
    render () {
        return (
            <>
                <HomePageTopSec/>
                <OurArtists/>
                <WeAreArtspassage/>
                <EventsLessons/>
                <Locations/>
                <ArtsPassageApp/>
                <PopularArtists/>
                <BecomeAnArtist/>
                <BookOurArtists/>
                <Footer/>
            </>
        );
    }
}

export default Home;
