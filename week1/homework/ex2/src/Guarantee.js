import React from 'react';

const Guarantee = (props)=>{
    return (
        <div>
            <img src={props.img} alt={props.title}/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Guarantee;
