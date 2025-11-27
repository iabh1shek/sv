import React from "react"
import { useNavigate } from "react-router-dom"
function Navigate (){ 
    const navigate = useNavigate()
    function handleonclick() { 

        navigate('/home')
    }
    return ( 
       <div> 

        <button onClick={handleonclick}> navigate to /Home </button>
       </div>
    )
}
export default Navigate; 