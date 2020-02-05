import React from 'react';
import './App.css';
import Friend from './components/Friend';
import DogGallery from './components/DogGallery';
import RandomJoke from './components/RandomJoke';
import Project from './components/Project'



function App() {
  
  return (
    <div className="App" style={{marginTop: '20px'}}>
      <br />
      <br />
      <br />
      <Friend />
      <br />
      <br />
      <br />

      <hr />
      
      <br />
      <br />
      <br />


      <DogGallery />
      <br />
      <br />
      <br />

      <hr />

      <br />
      <br />
      <br />
      <RandomJoke />
      <br />
      <br />
      <br />

      <Project />
      
    </div>
  );
}

export default App;
