import React, { Component } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Informations from './components/Informations';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div id="CV">
        <div className="sidebar">
          <Profile />
          <Informations />
          <Skills />
        </div>
        <div className="main">
          <Header />
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
