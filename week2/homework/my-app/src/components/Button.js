import React from 'react'

export default function Button({getFriend}) {
    return (
        <div>
            <button style={{fontSize:'20px'}} onClick={getFriend}>Get a friend!</button>
        </div>
    )
}
