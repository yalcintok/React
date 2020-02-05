import React, { useState } from 'react';
import Search from './Search';
import City from './City';


export default function Project () {

    const [city, setCity] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    
    return (
        <div>
            <h1>Weather</h1>
            <Search setCity={setCity} setLoading={setLoading} setError={setError}/>
            {
                hasError ? <p>Something went wrong</p> :
                isLoading ? <p>...loading</p> : 
                Object.entries(city).length ? <City city ={city}/> : 
                <p>No city search</p>
            }
        </div>

    )
} 

