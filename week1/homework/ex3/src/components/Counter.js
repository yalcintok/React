import React,{useState} from 'react';
import Button from './Button';
import Count from './Count';



export default function Counter() {
    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
    return (
        <div>
            
            <p>{feedback}</p>
            <Count 
            total = {count}
            />
            <Button 
                text = "Add 1!"
                handleClick = {() => {
                    setCount(count + 1);
                }}
            />

        </div>
    )
}
