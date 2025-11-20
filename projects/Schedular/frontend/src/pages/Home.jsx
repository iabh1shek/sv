import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() { 
    const navigate = useNavigate();

    function handleSignin() { 
        navigate('/signin')
    }

    function handleSignup(){ 
        navigate('/signup')
    }

    return( 
        <div> 
            <button onClick={handleSignin}>Sign in</button>        
            <button onClick={handleSignup}>Sign up</button>
        </div>
    )
}
export default Home; 