import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Home from './pages/Home'
import Signup from './components/Signup'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './ProtectedRoutes'



function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />

                {/* <Route element={<ProtectedRoutes></ProtectedRoutes>}>


                </Route> */}
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>


                <Route path='/signin' element={<Signin></Signin> } />
                <Route path='/signup' element={<Signup></Signup>}></Route>
            </Routes>
        </>
    )
}

export default App
