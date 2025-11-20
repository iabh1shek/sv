import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Signin() {
    const [username, setUsername]=useState(""); 
    const[password, setPassword] = useState("");
    const navigate = useNavigate(); 
    async function handlesignin(event) { 
        event.preventDefault()

        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', {username, password})


            if(response.status === 200) { 
                const token = response.data.token; 
                localStorage.setItem('token', token); 
                console.log("signin successfull")

                navigate('/dashboard')

            } 
        } catch (error) {
            console.log(error.message) 
        }
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
                <input type='password' 
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