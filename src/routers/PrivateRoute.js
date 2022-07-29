import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PrivateRoute({role, children}) {

    const navigate = useNavigate();
    const location = useLocation();
    const { hasRole, isLogged } = useAuth();

    // if(role && !hasRole(role)) return <Navigate to={routes.home} />
    if(role && !hasRole(role)) return navigate(routes.home) 
    // if(!isLogged()) return <Navigate to ={{pathname: routes.login, state: location.state }} />
    if(!isLogged()) return navigate(routes.login, {state: location}) 
 

    return children;
}
