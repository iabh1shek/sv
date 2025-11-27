import React from "react";
import Navigate from "./components/navigate";
import { Routes, Route } from "react-router-dom";

const Navigatedashboard = React.lazy(() => import("./components/navigate"));
function App () { 


    return (
        <Routes>

            <Route path='/dashboard' element={<Navigatedashboard></Navigatedashboard>}></Route>
        </Routes>
    )
}


export default App; 