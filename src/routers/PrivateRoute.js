import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {

    const user = null;

    if(!user) return <Navigate to='/login' />

    return children;
}
