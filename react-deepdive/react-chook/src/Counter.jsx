import React  from "react";
import useCounter from "./useCounter";
function Counter() {
    const { count , increment , decrement, reset} = useCounter(5)// starting value is 5 

return ( 


    <div> 
        <h2>Custom Hook </h2>
        <h1>{count}</h1>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}> decrement </button>
        <button onClick={reset}>Reset</button>
    </div>
)}

export default Counter; 
