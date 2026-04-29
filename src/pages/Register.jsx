import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './main.css';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container auth-container">
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Create an Account</h2>
        <p>Join AxeWear for a premium shopping experience.</p>
        <div style={{ marginTop: '30px' }}>
          <p style={{marginBottom: '20px', color: 'var(--text-secondary)'}}>Registration form coming soon.</p>
          <button className="btn-secondary" onClick={() => navigate('/login')} style={{width: '100%'}}>
            Back to Login
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Register;