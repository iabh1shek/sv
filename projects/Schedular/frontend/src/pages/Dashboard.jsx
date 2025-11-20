import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Dashboard() {
    const [todo, setTodo] = useState(""); 
    const [todolist, setTodolist] = useState([]);

    async function handleAddtodo() { 
        const value = todo.trim(); 
        if (value === "") return ;

        try {
            const token = localStorage.getItem("token");
            
            const response = await axios.post("http://localhost:3000/api/v1/todo", 
                { title: value },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            
            console.log("Todo created successfully:", response.data);
            
            setTodolist([...todolist, value]); 
            setTodo("");
        } catch (error) {
            console.error("Error creating todo:", error.response?.data || error.message);
        }
    }

    return ( 
        <div> 
            <h1> Welcome to Planner</h1>
            <div> 
                <input type="text"
                value={todo} 
                onChange={(e)=>setTodo(e.target.value)} 
                placeholder='Add a new Task ... '
                />

                <button onClick={handleAddtodo}>Add</button>
            </div>

            
            <div> 
                {todolist.length === 0 ? (<p>No task yet</p>): ( <ul>

                    {todolist.map((value,index)=>(
                        <li key={index}>
                            <input 
                            type='checkbox'>
                            </input>
                            <span>{value}</span>
                        </li>
                    ))}
                </ul>)}
            </div>
        </div>
    )
}

export default Dashboard