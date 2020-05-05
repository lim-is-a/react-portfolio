import React from 'react';
import './App.css';
import Profile from './components/Profile'
import ProjectList from './components/ProjectList'
import TechnicalSkills from './components/TechnicalSkills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
        <ProjectList/>
        <TechnicalSkills/>
      </header>
    </div>
  );
}

export default App;
