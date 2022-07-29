import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import roles from '../helpers/roles'

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const navigate = Navigate();
    const [user, setUser] = useState(null);

    const login = (userCredentials, fromLocation) => {
      setUser({id:1, role:roles.regular});
      if(fromLocation){
        navigate.push(fromLocation)
      }
    }
      const logout = () => setUser(null);

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout
    }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
