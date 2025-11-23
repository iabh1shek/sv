// import React, { useState } from "react";
// function App () { 
//     const [todos, setTodos] = useState([{
//         title: "go to gym", 
//         description: " need to hit the gym from 7 -9pm"
//     }, { 
//         title: "go to class", 
//         description: " need to reach class before 10 am"
//     },{ 
//         title: "eat dinner ", 
//         description: " need to eat dinner before 10pm "
//     }])

//     return ( 
//         <div> 

//             { 
//                 todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)
//             }
//         </div>
//     )
// }

// function Todo({title, description}) { 
//     return ( 
//         <div> 
//         <h1> 
//             {title}
//         </h1>
//         <h4>
//             {description}
//         </h4>

//         </div>
//     )
// }
// export default App ; 





import React  from "react";
import { useState } from "react";
let GLOBAL_ID = 4;

function App (){ 
    const [todos, setTodos] = useState([{
        id: 1,
        title: "go to gym", 
        description: " need to hit the gym from 7 -9pm"
    }, { 
        id:2,
        title: "go to class", 
        description: " need to reach class before 10 am"
    },{ 
        id:3,
        title: "eat dinner ", 
        description: " need to eat dinner before 10pm "
    }])

    function addTodo(){ 
        setTodos([...todos,{ 
            id: GLOBAL_ID++, 
            title: "new todo", 
            description: "new todo desc"
        }])
    }
    return ( 
        <div> 

            <button onClick={addTodo}> Add Todo </button>
            { 
                todos.map((todo, index) => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)
            }
        </div>
    )
}

function Todo({title, description}){ 
    return <div> 

        <h1>{title}</h1>
        <h4>{description}</h4>
    </div>
}



export default App;