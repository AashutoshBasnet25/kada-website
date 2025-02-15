import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './forgot-password.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // 1: email input, 2: code verification, 3: new password
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // For now, just simulate sending verification code
      console.log('Sending verification code to:', email);
      setMessage('Verification code has been sent to your email.');
      setStep(2);
    } catch (err) {
      setError('Failed to send verification code. Please try again.');
    }
  };

  const handleCodeVerification = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // For now, just simulate code verification
      console.log('Verifying code:', verificationCode);
      setStep(3);
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // For now, just simulate password reset
      console.log('Resetting password');
      setMessage('Password has been reset successfully!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container flex items-center justify-center">
      <div className="forgot-password-box">
        <h1 className="forgot-password-title text-center text-2xl font-medium">
          Reset Password
        </h1>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send Verification Code
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleCodeVerification}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Verify Code
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordReset}>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Reset Password
            </button>
          </form>
        )}

        <p className="footer-text">
          Remember your password? <Link to="/login" className="link-text">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
