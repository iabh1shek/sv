// import React, { useEffect } from "react";

// import { useState } from "react";

// // real wrapper component
// function App() { 

//     const [count, setCount] = useState(0); 
//     const [todo, setTodos] = useState([]); 


//     //  api calling to our backend logic
 
//     useEffect(() =>{ 


//         // logic to run 
//         fetch("route url ") 
//             .then(async(res) =>{ 
//                 const json = await res.json() 
//                 setTodos(json.todos)
//             })


//             // dependency array 
//     },[2000])
    

    

//     return <div> 

//         <button onClick={function() { 
//             setCount(count + 1)
//         }}> Counter{ count}</button>
//     </div>

// }

// export default App; 




import React from "react"
import { useEffect, useState } from "react"
function App() { 
    return <div> 
        <Todo id={1}></Todo>
    </div>
}


function Todo ({id}){ 
    const[todo, setTodo] = useState({}); 

     
    useEffect(()=>{ 
        fetch("ROUTE URL" + id) 
            .then(async function(res) { 
                const json = await res.json(); 
                setTodo(json.todo);
            })
    },[id])

    return <div>
        <h1>{todo.title}</h1>

        <h4>{todo.description}</h4>

    </div>
}

export default App; 