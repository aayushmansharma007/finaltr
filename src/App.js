import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import OrdersDashboard from './components/OrdersDashboard';
import LoginRegister from './components/LoginRegister';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <div>
                {token && <Navigation />}
                <div className="container">
                    <Routes>
                        <Route 
                            path="/" 
                            element={token ? <Navigate to="/home" /> : <Navigate to="/login" />} 
                        />
                        <Route 
                            path="/login" 
                            element={token ? <Navigate to="/home" /> : <LoginRegister isLogin={true} />} 
                        />
                        <Route 
                            path="/register" 
                            element={token ? <Navigate to="/home" /> : <LoginRegister isLogin={false} />} 
                        />
                        <Route 
                            path="/home" 
                            element={token ? <Home /> : <Navigate to="/login" />} 
                        />
                        <Route 
                            path="/orders" 
                            element={token ? <OrdersDashboard /> : <Navigate to="/login" />} 
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

