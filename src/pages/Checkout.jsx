import React from 'react';
import { motion } from 'framer-motion';
import './main.css';

const Checkout = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Checkout
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Complete your purchase securely.
        </motion.p>
      </div>
      <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-secondary)' }}>
        <p>Checkout form coming soon.</p>
      </div>
    </div>
  )
}

export default Checkout;