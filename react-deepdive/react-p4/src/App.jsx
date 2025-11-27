
import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function App() { 
    const[counter, setCounter] = useState(0); 
    const[inputvalue, setInputvalue] = useState(1); 

     

    // better solution 
    let count = useMemo(()=>{ 
        let finalcount = 0
    for(let i = 1; i <= inputvalue; i++){ 
            finalcount = finalcount + 1; 
        }

        return finalcount
    },[inputvalue])

    
 
    return <div> 

        <input onChange={function(e){setInputvalue(e.target.value);}} placeholder="find the sum from 1 to n "></input>
        <br />

        sum from 1 to n {inputvalue} is {count}
        <br />


        <button onClick={() =>{
            setCounter(counter + 1)
        }}>Counter ({counter})</button>

    </div> 
}

export default App; 