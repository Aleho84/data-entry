import React ,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PersonData from './components/PersonData';
import VehicleData from './components/VehicleData';
import { isAuthenticated } from './services/authService';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    console.log(`isAutenticated: ${isAuthenticated()}`);
    setIsLoggedIn(isAuthenticated()); // Verificar el estado de autenticación al cargar la aplicación
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsLoggedIn} />} />
        <Route 
          path="/" 
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/person" 
          element={isLoggedIn ? <PersonData /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/vehicle" 
          element={isLoggedIn ? <VehicleData /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;

