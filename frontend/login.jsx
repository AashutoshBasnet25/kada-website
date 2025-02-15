import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    userType: 'citizen'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post('/api/auth/login', credentials);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userType', response.data.userType);
        
        if (response.data.userType === 'official') {
          navigate('/dashboard/official');
        } else {
          navigate('/dashboard/citizen');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container flex items-center justify-center">
      <div className="login-box">
        <h1 className="login-title text-center text-2xl font-medium">
          NDRS Login
        </h1>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <div className="text-right mt-1">
              <Link to="/forgot-password" className="link-text text-sm">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="form-group">
            <select
              name="userType"
              value={credentials.userType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="citizen">Citizen</option>
              <option value="official">Government Official</option>
            </select>
          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <p className="footer-text">
          Don't have an account? <Link to="/register" className="link-text">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
