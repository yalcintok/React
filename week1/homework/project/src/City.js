import React from 'react';

function City ({city}) {
    
    return (
        <div>
            <p>{city.name}, {city.sys.country}, </p>
            <p>{city.weather.main}</p>
            <p>{city.weather.despriction}</p>
            <p>{city.main.temp_min}, {city.main.temp_max}</p>
            <p>{city.coord.lon}, {city.coord.lat}</p>
        </div>
    )
}

export default City;