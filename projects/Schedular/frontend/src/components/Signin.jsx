import React from 'react'
import { useState } from 'react';
function Signin() {
    const [username, setUsername]=useState(""); 
    const[password, setPassword] = useState("");
    
    function handlesignin() { 
        
    }
  return (
    <div>
        <h2>Sign In</h2>
        <form onSubmit={handlesignin}>
            <div>
                <label>Username:</label>
                <input type='text' 
                value={username} 
                onChange={(e)=>setUsername(e.target.value)}
                placeholder='Enter your username' 
                required>
                </input>
            </div>

            <div>
                <label>password:</label>
                <input type='text' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Enter your password' 
                required>
                </input>
            </div>


            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default Signin   