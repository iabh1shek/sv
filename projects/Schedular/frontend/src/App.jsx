import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Home from './pages/Home'
import Signup from './components/Signup'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<Signin></Signin> } />
                <Route path='/signup' element={<Signup></Signup>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            </Routes>
        </>
    )
}

export default App
