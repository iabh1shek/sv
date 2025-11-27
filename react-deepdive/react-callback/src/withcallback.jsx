import React, { useCallback }  from "react";
import { useState } from "react";


// child component 
const Button = React.memo(({onClick, text})=>{

    alert(`Child ${text} button rendered`)

    return <button onClick={onClick}>{text}</button>

})

// parent component without usecallback 
function withoutusecallback() { 
    const [count1, setCount1] = useState(0); 
    const[count2, setCount2] = useState(0); 


    const handleClick1 = useCallback(()=>{ 
        setCount1(count1 + 1); 
    },[count1])



    const handleClick2 = useCallback(()=>{ 
        setCount2(count2 + 1); 
    },[count2])



    alert('parent re-rendered'); 
    return (
        <div> 

            <h2>without usecallback</h2>
            <p>count 1: {count1}</p>
            <p>count 2:{count2}</p>
            <Button onClick={handleClick1} text = "button 1"></Button>
            <Button onClick={handleClick2} text="button 2"></Button>
        </div>
    )
}

export default withoutusecallback;