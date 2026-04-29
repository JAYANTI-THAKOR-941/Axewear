import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--text-primary)', color: 'white', padding: '60px 8% 30px', marginTop: 'auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', marginBottom: '20px', background: 'linear-gradient(135deg, var(--accent-color), #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            AxeWear
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
            Premium fashion for women with elegance, comfort, and confidence in every outfit.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/products" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Shop</Link></li>
            <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About</Link></li>
            <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Customer Service</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><span style={{ color: 'rgba(255,255,255,0.7)' }}>FAQ</span></li>
            <li><span style={{ color: 'rgba(255,255,255,0.7)' }}>Shipping & Returns</span></li>
            <li><span style={{ color: 'rgba(255,255,255,0.7)' }}>Size Guide</span></li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
        <p>&copy; {new Date().getFullYear()} AxeWear. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;