import Login from './screens/Login';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Register from './screens/Register';
import Home from './screens/Home';

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router >
  );
}

export default App;
