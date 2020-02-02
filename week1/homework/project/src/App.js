import React from 'react';
import './App.css';
import City from './City';
import data from './city-weather.json'

function App() {
  return (
    <div className="App">
      <h2>Weather</h2>
      {data.map(city => <City city = {city} key = {city.id} />)} 
    </div>
  );
}

export default App;
