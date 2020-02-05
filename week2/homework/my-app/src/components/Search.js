import React, { useState } from 'react';

export default function Search ({setCity, setLoading, setError}) {

    const [value, setValue] = useState("");
    const appId = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${appId}&q=`


    function getWeatherInfo () {
        setLoading(true);
        setError(false);
        fetch(URL + value)
            .then(res => {
                
                if(res.ok) {
                    return res.json()
                }
                throw new Error()
            })
            .then(data => {
                setCity(data)
                setLoading(false)
            })
            .catch(() =>{
                setError(true);
                setLoading(false)
            })
    }

    return (
        <div>
        <input type='text' onChange={(e) => {
            setValue(e.target.value);
        }} placeholder='Search City' />
        <button onClick={getWeatherInfo}>SEARCH</button>
        </div>
    )
}