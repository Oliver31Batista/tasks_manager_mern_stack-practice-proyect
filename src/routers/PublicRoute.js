import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PublicRoute({children}) {

    const { isLogged } = useAuth();

    if(isLogged()) return <Navigate to={routes.projects} />

    return children;
}
