import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("user-auth-data");
    setOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const stop = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      stop();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <motion.div
        className="logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate("/")}
      >
        AxeWear
      </motion.div>

      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <motion.div
        className="header-buttons"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {user ? (
          <div className="profile-container" ref={dropdownRef}>
            <img
              src={user.photoURL || "https://ui-avatars.com/api/?name=" + user.displayName}
              alt="profile"
              className="profile-img"
              onClick={() => setOpen(!open)}
            />

            <AnimatePresence>
              {open && (
                <motion.div 
                  className="dropdown"
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <p>{user.displayName}</p>
                  <button onClick={() => { navigate("/profile"); setOpen(false); }}>Profile</button>
                  <button onClick={() => { navigate("/dashboard"); setOpen(false); }}>Dashboard</button>
                  <button onClick={logout} style={{ color: "var(--danger-color)" }}>Logout</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <button className="btn-primary" onClick={() => navigate("/login")}>Login</button>
        )}
      </motion.div>
    </header>
  );
};

export default Header;