import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Global styles
import './App.css'

import Footer from './Components/Footer'
import Header from './Components/Header'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import User from './Components/User/User'
import { UserStorage } from './Contexts/UserContext'


function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login/*' element={<Login />} />
                        <Route path='/conta/*' element={
                            //Verifica se está logado no componente abaixo para ter acesso a página/rota da conta d ousuário.
                            <ProtectedRoute>
                                <User />
                            </ProtectedRoute>
                        } />
                    </Routes>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    )
}

export default App