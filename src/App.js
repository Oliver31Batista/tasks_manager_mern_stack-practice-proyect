import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
