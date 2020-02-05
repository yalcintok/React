import React from 'react'

export default function City({city, removeCity}) {
    return (
        <div>
            <a href={'/' + city.id}>Open</a>
            <button onClick={() => {removeCity(city.id)}}>X</button>
            <p>{city.name}, {city.sys.country}</p>
            <p>{city.weather[0].main}</p>
            <p>{city.weather[0].description}</p>
            <p>{city.main.temp_max} {city.main.temp_min}</p>
            <p>{city.coord.lat} {city.coord.lon}</p>
        </div>
    )
}
