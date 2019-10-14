import React, { } from 'react';

import './App.css';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <h1>React Router Simple Starter</h1> */}
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink> </li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
