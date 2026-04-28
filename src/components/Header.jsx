import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("user-auth-data");
    alert("Logout successfully!");
  };

  useEffect(() => {
    const stop = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => stop();
  }, []);

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
          <li><a href="/products">Shop</a></li>
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
        {user ? (
          <div className="profile-container">
            <img
              src={user.photoURL}
              alt="profile"
              className="profile-img"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="dropdown">
                <p>{user.displayName}</p>
                <button onClick={() => navigate("/profile")}>Profile</button>
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </motion.div>
    </header>
  );
};

export default Header;