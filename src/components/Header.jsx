import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className="header">
      <motion.div
        className="logo"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        AxeWear
      </motion.div>

      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">Collection</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>

      <motion.div
        className="header-buttons"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <button className="login-btn" onClick={()=>navigate('/login')}>Login</button>
        <button className="shop-btn">Shop Now</button>
      </motion.div>
    </header>
  );
};

export default Header;