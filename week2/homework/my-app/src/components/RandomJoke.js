import React, { useEffect, useState } from 'react';
import Joke from './Joke';

function RandomJoke () {
    const [joke, setJoke] = useState({});
    const[isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        const URL = 'https://official-joke-api.appspot.com/random_joke';
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setJoke(data)
                setLoading(false)
            })
            .catch(err => {
                alert(err)
                setError(true)
                setLoading(false)
            })
    }, [])  

    if(isLoading) {
        return <p>...loading</p>
    }
    if(hasError) {
        return <p>Something went wrong</p>
    }
    if(joke) {
        return (
            <div>
                <Joke id ={joke.id} joke={joke}/>
            </div>
        )
    }
    
};

export default RandomJoke;