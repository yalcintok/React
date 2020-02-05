import React, { useState } from 'react';
import './App.css';
import City from './City';
import Search from './Search';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ForeCast from './ForeCast';


function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  function removeCity(cityId) {
    const newCities = cities.filter((city) => city.id !== cityId);
    setCities(newCities);
  }
 
  return (
    <div className="App">
      <h1>Weather</h1> 
      <Router>
      <Switch>
        <Route path='/:cityID'>
          <ForeCast />
        </Route>
        <Route path='/'>
          <Search setCities={setCities} setLoading={setLoading} setError={setError}/>
          {hasError && <p>Something went wrong</p>}
          {isLoading && <p>...loading</p>}
          {cities.map(city => <City removeCity={removeCity} key={city.id} city={city}/>)}
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
