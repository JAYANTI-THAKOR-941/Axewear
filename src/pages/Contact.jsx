import React from 'react';
import { motion } from 'framer-motion';
import './main.css';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We'd love to hear from you. Get in touch with our team.
        </motion.p>
      </div>
      <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-secondary)' }}>
        <p>Contact form coming soon.</p>
      </div>
    </div>
  )
}

export default Contact;