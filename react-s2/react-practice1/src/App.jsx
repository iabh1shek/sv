import React from "react";
import { useState } from "react";
function App() {
    
    const [title ,setTitle] = useState(' '); 
    function handleonclick() { 
        setTitle("my name is " + Math.random(0,10))
    }

    return <>
        <button onClick={handleonclick}>update the title </button>
        <Headers title={title}></Headers>
        <Headers title={" my name is rahul "}></Headers>

    </>

}

function Headers({title}){ 
    return <div> 
        {title}
    </div>
}


export default App; 