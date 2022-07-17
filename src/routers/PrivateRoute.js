import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth';

export default function PrivateRoute({role, children}) {

    const { user } = useAuth();

    if(role && user?.role !== role) return <Navigate to='/' />

    if(!user) return <Navigate to='/login' />

    return children;
}
