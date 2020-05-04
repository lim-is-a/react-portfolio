import React from 'react';
import './App.css';
import Profile from './components/Profile'
import ProjectList from './components/ProjectList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
        <ProjectList/>
      </header>
    </div>
  );
}

export default App;
