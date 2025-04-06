import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import OrdersDashboard from './components/OrdersDashboard';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    return (
        <Router>
            <div>
                {isAuthenticated && <Navigation />}
                <div className="container">
                    <Routes>
                        <Route 
                            path="/" 
                            element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} 
                        />
                        <Route 
                            path="/login" 
                            element={isAuthenticated ? <Navigate to="/home" /> : <LoginRegister isLogin={true} />} 
                        />
                        <Route 
                            path="/register" 
                            element={isAuthenticated ? <Navigate to="/home" /> : <LoginRegister isLogin={false} />} 
                        />
                        <Route 
                            path="/home" 
                            element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
                        />
                        <Route 
                            path="/orders" 
                            element={isAuthenticated ? <OrdersDashboard /> : <Navigate to="/login" />} 
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;


