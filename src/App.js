import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Swap from './Pages/Swap';
import Markets from './Pages/Markets';



const App = () => {
    return (
    <>
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/swap" element={<Swap />} />
                <Route path="/markets" element={<Markets/>} />
            </Routes>
        </Router>
    </>
    )
}

export default App
