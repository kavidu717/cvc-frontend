import { useState } from 'react';
import './Testing.css';

export default function Testing() {
    const [count, setCount] = useState(0);
     
    function increment() {
        setCount(count + 1);
    }
    return (
        <div className="counter">
            <h1>{count}</h1>

            <div className="buttons">
                <button onClick={increment}>+</button>
                <button>-</button>
            </div>
        </div>
    );
}
