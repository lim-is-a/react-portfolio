import React from 'react';
import './App.css';
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import ProjectList from './components/ProjectList'
import TechnicalSkills from './components/TechnicalSkills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
      </header>
        <AboutMe/>
        <ProjectList/>
        <TechnicalSkills/>
    </div>
  );
}

export default App;
