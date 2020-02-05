import React, { useState } from 'react'

export default function Search({setCities, setLoading, setError}) {
    const [cityName, setCityName] = useState('');
    function getWeatherInfo () {
        setLoading(true);
        setError(false);
        const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&q=`; 
        fetch(URL + cityName)
            .then(res => {
                if(res.ok) {
                   return res.json()
                }
                throw new Error();
            })
            .then(data => {
                setCities((currentCities) => [data, ...currentCities]);
                setLoading(false)
            })
            .catch(()=> {
                setError(true)
                setLoading(false)
            })
    }
    return (
        <div>
            
            <input placeholder='Search city' type='text' onChange={(e) => {
                setCityName(e.target.value)
            }} value={cityName}/>
            <button disabled={!cityName.length} onClick={getWeatherInfo}>Search</button>
        </div>
    )
}
