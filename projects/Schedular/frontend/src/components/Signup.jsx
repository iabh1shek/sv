import React from 'react'
import { useState } from 'react'
function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')   
    

    function handleSubmit(event){ 
        event.preventDefault()

        
    }
    
  return (
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
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



            <div>
                <label>email:</label>
                <input type='text' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter your email address' 
                required>
                </input>
            </div>


            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default Signup