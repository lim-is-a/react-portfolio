import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNavbar from './components/Navbar'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import ProjectList from './components/ProjectList'
import TechnicalSkills from './components/TechnicalSkills';

function App() {
  return (
    <div className="App" id="home">
      <header className="App-header">
        <Profile />
      </header>
      <MyNavbar />
      <AboutMe />
      <ProjectList />
      <TechnicalSkills />
    </div>
  );
}

export default App;
