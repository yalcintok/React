import React from 'react'
import {Link} from 'react-router-dom';
export default function City({city, removeCity}) {
    return (
        <div>
            <Link to={'/' + city.id}>Open</Link>
            <button onClick={() => {removeCity(city.id)}}>X</button>
            <p>{city.name}, {city.sys.country}</p>
            <p>{city.weather[0].main}</p>
            <p>{city.weather[0].description}</p>
            <p>{city.main.temp_max} {city.main.temp_min}</p>
            <p>{city.coord.lat} {city.coord.lon}</p>
        </div>
    )
}
