import React from 'react';
import Hobbies from './Hobbies';

function HobbyList() {
    const state = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
    return(
        <ul>
            {state.map(hobby => {
                return <Hobbies key={hobby} hobby={hobby}/>
            })}
        </ul>
    )
}

export default HobbyList;