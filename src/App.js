import Login from "./screens/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Enrollment from "./screens/Enrollment";
import { AuthProvider } from "./components/AuthContext";
import History from "./screens/History";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/payment" element={<Enrollment />} />
            <Route exact path="/history" element={<History />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
