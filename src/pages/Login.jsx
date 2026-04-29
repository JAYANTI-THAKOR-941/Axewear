import React, { useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./main.css";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user-auth-data', JSON.stringify(user));
  }, [user]);

  const authLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      console.log("Failed to login using google.!", err);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const stop = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => stop();
  }, []);

  return (
    <div className="page-container auth-container">
      <motion.div 
        className="auth-card"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {user ? (
          <div className="user-profile-card">
            <h2>Welcome Back!</h2>
            <img src={user.photoURL || "https://ui-avatars.com/api/?name=" + user.displayName} alt="Profile" />
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <button className="btn-primary" onClick={() => navigate('/')} style={{width: '100%', marginBottom: '10px'}}>Go to Home</button>
            <button className="btn-secondary" onClick={logout} style={{width: '100%'}}>Logout</button>
          </div>
        ) : (
          <>
            <h2>Sign In</h2>
            <p>Welcome to AxeWear. Please login to continue your premium shopping experience.</p>
            <button className="google-btn" onClick={authLogin}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="google-icon" />
              Continue With Google
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
