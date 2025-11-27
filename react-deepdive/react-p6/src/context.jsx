import React from "react"
import { useContext } from "react"


const userContext = React.createContext() 
// top - level component with a provider 
function Context() { 

    const user = {username : "abhishek", 
        role : "user"
    }


    return ( 
        <userContext.Provider value ={user}>

            <Profile></Profile>
        </userContext.Provider>
    )
}

// intemediate component 
function Profile() { 
    return ( 
        <Navbar/>
    )
}


// deepest component 
function Navbar() { 
    const user = useContext(userContext); 
    return ( 
        <div> 

            <p>welcome, {user.username} ({user.role})</p>
        </div>
    )
}

export default Context