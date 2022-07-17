import useAuth from "../auth/useAuth"

const userCredentials = {};

export default function LoginPage() {

  const { login } = useAuth();

  return (
    <div>
      <button onClick={() => login(userCredentials)}>Iniciar Sesión</button>
    </div>
  )
}
