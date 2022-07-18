import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth"

const userCredentials = {};

export default function LoginPage() {
  const location = useLocation();
  console.log(location)

  const { login } = useAuth();

  return (
    <div>
      <button onClick={() => login(userCredentials)}>Iniciar Sesión</button>
    </div>
  )
}
