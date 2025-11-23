import React, { useEffect } from "react";

import { useState } from "react";

// real wrapper component
function App() { 

    const [count, setCount] = useState(0); 
    const [todo, setTodos] = useState([]); 


    //  api calling to our backend logic
 
    useEffect(() =>{ 


        // logic to run 
        fetch("route url ") 
            .then(async(res) =>{ 
                const json = await res.json() 
                setTodos(json.todos)
            })


            // dependency array 
    },[2000])
    

    

    return <div> 

        <button onClick={function() { 
            setCount(count + 1)
        }}> Counter{ count}</button>
    </div>

}

export default App; 