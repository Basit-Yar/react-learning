import { useState } from "react";
function Counter() {

    let [counter, setCounter] = useState(1);

    function increment () {
        if (counter >= 10) return;
        counter ++;
        setCounter(counter);
    }

    function decrement () {
        if (counter <=0) return;
        counter --;
        setCounter(counter);
    }

    return (
        <>
            <h3>Counter : {counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
}

export default Counter;