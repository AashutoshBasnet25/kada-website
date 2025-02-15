import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../frontend/login'
import Register from '../frontend/register'
import ForgotPassword from '../frontend/forgot-password'
import Profile from '../frontend/profile'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          {/* Add more routes here as you develop other components */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
