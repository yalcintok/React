import React from 'react'

export default function Button2({getDogPhoto}) {
    return (
        <div>
            <button style={{fontSize:'20px'}} onClick={getDogPhoto}>Get a dog!</button>
        </div>
    )
}
