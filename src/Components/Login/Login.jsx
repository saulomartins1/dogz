import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPassReset from './LoginPassReset'
import { UserContext } from '../../Contexts/UserContext'

function Login() {
    const { login } = React.useContext(UserContext)

    if (login === true) {
        return <Navigate to='/conta' replace={true} />
    }

    return (
        <Routes>
            <Route path='/' element={<LoginForm />} />
            <Route path='criar' element={<LoginCreate />} />
            <Route path='recuperar' element={<LoginPassReset />} />
        </Routes>
    )
}

export default Login
