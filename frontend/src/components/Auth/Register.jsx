import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    district: '',
    userType: 'citizen',
    specialization: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="auth-container flex items-center justify-center">
      <div className="auth-box">
        <h1 className="auth-title text-center text-2xl font-medium">
          Create NDRS Account
        </h1>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              className="form-input"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="Phone Number (+977)"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="address"
              className="form-input"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="district"
              className="form-input"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="citizen">Citizen</option>
              <option value="official">Government Official</option>
            </select>
          </div>

          {formData.userType === 'official' && (
            <div className="form-group">
              <input
                type="text"
                name="specialization"
                className="form-input"
                placeholder="Specialization (e.g., Medical, Rescue)"
                value={formData.specialization}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button 
            type="submit" 
            className="auth-button"
          >
            Register
          </button>
        </form>

        <p className="footer-text">
          Already have an account? <span onClick={() => navigate('/login')} className="link-text">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
