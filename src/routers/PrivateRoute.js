import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PrivateRoute({role, children}) {

    const { hasRole, isLogged } = useAuth();

    if(role && !hasRole(role)) return <Navigate to={routes.home} />

    if(!isLogged()) return <Navigate to={routes.login} />

    return children;
}
