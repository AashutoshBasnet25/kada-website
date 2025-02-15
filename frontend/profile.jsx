import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
    fullName: 'John Doe',  // Placeholder data
    email: 'john@example.com',
    phone: '+977 98XXXXXXXX',
    address: 'Kathmandu',
    district: 'Kathmandu',
    userType: 'citizen',
    specialization: '',
    emergencyContact: '',
    bloodGroup: '',
    lastActive: '2025-02-15',
    reportedIncidents: 5,
    responseRate: '95%'
  });

  const [originalProfile] = useState(profile);

  useEffect(() => {
    // In real implementation, fetch user data here
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Simulate API call
      console.log('Updating profile:', profile);
      setMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    }
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setIsEditing(false);
    setError('');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {profile.fullName.charAt(0).toUpperCase()}
        </div>
        <h1 className="profile-name">{profile.fullName}</h1>
        <span className="profile-type">{profile.userType}</span>
      </div>

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="profile-content">
        <div className="profile-section">
          <h2 className="section-title">Personal Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-input"
                  value={profile.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={true}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-input"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>Emergency Contact</label>
                <input
                  type="tel"
                  name="emergencyContact"
                  className="form-input"
                  value={profile.emergencyContact}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-input"
                  value={profile.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="form-group">
                <label>District</label>
                <input
                  type="text"
                  name="district"
                  className="form-input"
                  value={profile.district}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Blood Group</label>
                <select
                  name="bloodGroup"
                  className="form-select"
                  value={profile.bloodGroup}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              {profile.userType === 'official' && (
                <div className="form-group">
                  <label>Specialization</label>
                  <input
                    type="text"
                    name="specialization"
                    className="form-input"
                    value={profile.specialization}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              )}
            </div>

            <div className="stats-section">
              <h2 className="section-title">Activity Statistics</h2>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Last Active</span>
                  <span className="stat-value">{profile.lastActive}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Reported Incidents</span>
                  <span className="stat-value">{profile.reportedIncidents}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Response Rate</span>
                  <span className="stat-value">{profile.responseRate}</span>
                </div>
              </div>
            </div>

            <div className="button-group">
              {isEditing ? (
                <>
                  <button type="submit" className="save-button">
                    Save Changes
                  </button>
                  <button type="button" className="cancel-button" onClick={handleCancel}>
                    Cancel
                  </button>
                </>
              ) : (
                <button type="button" className="edit-button" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </button>
              )}
              <button type="button" className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
