import React from 'react'
import useState from 'react'
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
function ProtectedRoutes() {
    const [isAuth, setIsAuth] = useState(null);


    useEffect(()=>{ 

        async function verifyToken() { 
            const token = localStorage.getItem("token"); 
            if(!token) { 
                setIsAuth(false)
            }
    
    
            await axios.get('auth route path ',{ 
                headers: {Authorization: `Bearer ${token}`}
            }); 
            setIsAuth(true) 
        }
        verifyToken()
    },[])

    if(isAuth == null) return <p>Loading ...</p>
    if(isAuth) { 
        return <Outlet> 

        </Outlet>
    }
    else {
        return <Navigate to='/signin' replace> </Navigate>
    }
}

export default ProtectedRoutes