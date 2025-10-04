import React, {useState} from 'react';
import './Counter.css';

function Counter(){
    
    const [count, setCount] = useState(0);

    const increment = () => {

        // Takes the pending state to calculate next state.
        // react puts your updater function in a queue (waiting in line)
        // During the next render, iw will call them in the same order.

        setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(c => c - 1);
        // setCount(c => c - 1);
        // setCount(c => c - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return(<div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={increment}>Increment</button>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
    </div>);
}

export default Counter