import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPassReset from './LoginPassReset'

function Login() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='criar' element={<LoginCreate />} />
                <Route path='recuperar' element={<LoginPassReset />} />
            </Routes>
        </>
    )
}

export default Login