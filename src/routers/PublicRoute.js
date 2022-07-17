import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function PublicRoute({children}) {

    const { user } = useAuth();

    if(user) return <Navigate to='/projects' />

    return children;
}
