import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext'

function ProtectedRoute({ children }) {
    const { login } = React.useContext(UserContext);
    console.log(login)

    if (login === true) {
        return children
    }
    else if (login === false) {
        return <Navigate to="/login" />
    }
    else {
        return <></>
    }

}

export default ProtectedRoute