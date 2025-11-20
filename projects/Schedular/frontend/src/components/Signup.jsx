import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')   

    const navigate = useNavigate(); 
    

    async function handleSubmit(event){ 
        event.preventDefault()
        
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {username, password,email})
            console.log("signup successfull", response.data)   

            localStorage.setItem("token", response.data.token)
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }

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
                <input type='password' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Enter your password' 
                required>
                </input>
            </div>



            <div>
                <label>email:</label>
                <input type='email' 
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