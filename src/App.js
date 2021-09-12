import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Components
import Home from './Pages/HomePage/Home';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
  
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
  
        </Router>
      </div>
    );
  }
}

export default App;