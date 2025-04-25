import React, { useState, useEffect } from 'react';
import AdminLogin from '../../components/AdminLogin/AdminLogin';
import './RegistrationList.css';

const RegistrationList = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAdminAuthenticated') === 'true'
  );

  useEffect(() => {
    if (isAuthenticated) {
      fetchRegistrations();
    }
  }, [isAuthenticated]);

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('http://localhost:8080/registered/users', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error(
          response.status === 404 
            ? 'No registrations found'
            : 'Failed to fetch registrations'
        );
      }

      const data = await response.json();
      const registrationsArray = data.content || [];
      setRegistrations(registrationsArray);
      setLoading(false);
    } catch (err) {
      console.error('Error in fetchRegistrations:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={setIsAuthenticated} />;
  }

  if (loading) {
    return (
      <div className="registration-list-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading registrations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-list-container">
      <div className="registration-header">
        <h1>Registration Details</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      
      {error ? (
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
          <button className="retry-btn" onClick={fetchRegistrations}>
            Try Again
          </button>
        </div>
      ) : registrations.length === 0 ? (
        <div className="no-data">
          <p>No registrations found.</p>
          <button className="retry-btn" onClick={fetchRegistrations}>
            Refresh List
          </button>
        </div>
      ) : (
        <div className="registration-table-wrapper">
          <table className="registration-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>College Name</th>
                <th>Mobile Number</th>
                <th>Applying For</th>
                <th>Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration) => (
                <tr key={registration.id || registration._id}>
                  <td>{registration.id || registration._id}</td>
                  <td>{registration.name}</td>
                  <td>{registration.collegeName}</td>
                  <td>{registration.mobileNumber}</td>
                  <td>{(registration.applyingFor || '').toLowerCase()}</td>
                  <td>
                    {registration.registrationDate 
                      ? new Date(registration.registrationDate).toLocaleDateString()
                      : new Date().toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RegistrationList;

