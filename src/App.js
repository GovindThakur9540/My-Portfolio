import React from 'react';
import './App.css';
import Home from './contents/Home';
import About from './contents/About';
import Contact from './contents/Contact';
import Skills from './contents/Skills';
import Education from './contents/Education';

import{
  BrowserRouter as Router,
  Route,
}from "react-router-dom";

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Route for Home.js contents */}
        <Route exact path="/">
          <Home />
        </Route>
        {/*Route for About.js contents */}
        <Route path="/About">
          <About />
        </Route>
        {/*Route for Education.js contents */}
        <Route path="/Education">
          <Education />
        </Route>
        {/*Route for Skills.js contents*/}
        <Route path="/Skills">
          <Skills />
        </Route>
        {/*Route for Contact.js contents */}
        <Route path="/Contact">
          <Contact />
        </Route>
      </div>
    </Router>
  )
}

export default App;
