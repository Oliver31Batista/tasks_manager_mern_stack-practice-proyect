import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth"

const userCredentials = {};

export default function LoginPage() {
  const location = useLocation();

  const { login } = useAuth();

  return (
    <div>
      <button onClick={() => login(userCredentials, location.state?.pathname)}>Iniciar Sesión</button>
    </div>
  )
}
