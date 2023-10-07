import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Global styles
import './App.css'

import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import { UserStorage } from './Contexts/UserContext'


function App() {
    return (
        <div className="container">
            <UserStorage>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login/*' element={<Login />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </UserStorage>
        </div>
    )
}

export default App