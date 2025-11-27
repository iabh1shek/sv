// implementation of prop drilling 
import React from "react"
import Context from "./context"

function App () { 
    const data = " Hello from the Component" 

    return ( 
        <>
            <Context />
            <ChildComponent data={data}></ChildComponent>
        </>
    )

}

// intermediate component 
function ChildComponent({data}) { 
    return ( 
        <GrandChildComponent data = {data}></GrandChildComponent>
    )
}



// deepest component 
function GrandChildComponent({data}) {

    return ( 
        <div> 
            <p>{data}</p>
        </div>
    )
}

export default App; 


