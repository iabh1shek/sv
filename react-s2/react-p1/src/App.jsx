import React from "react";
import { useState } from "react";
import { memo } from "react";
function App() {

    const [title ,setTitle] = useState(' '); 
    function handleonclick() { 
        setTitle("my name is " + Math.random(0,10))
    }

    return <>
        <button onClick={handleonclick}>update the title </button>
        <Headers title={title}></Headers>
        <Headers title={" my name is rahul "}></Headers>

    </>

}

// function Headers({title}){ 
//     return <div> 
//         {title}
//     </div>
// }


// export default App; 



// import { useState } from "react"

// function App() {
//     return (
//         <div>
//             <HeaderWithButton />
//             <Header title="My name is raman" />
//         </div>
//     )
// }

// function HeaderWithButton() {
//     const [firstTitle, setFirstTitle] = useState("my name is abhishek"); // The name is now abhishek

//     function changeTitle() {
//         setFirstTitle("My name is " + Math.random())
//     }

//     return (
//         <>
//             <button onClick={changeTitle}>Click me to change the title</button>
//             <Header title={firstTitle} />
//         </>
//     )
// }

const Header = memo(function Header({ title }) {
    return (
        <div>
            {title}
        </div>
    )
})

export default App
 
