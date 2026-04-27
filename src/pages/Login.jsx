import React, { useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const [user, setUser] = useState(null);

  localStorage.setItem('user-auth-data',JSON.stringify(user));

  const authLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login successfully.!");
    } catch (err) {
      console.log("Failed to login using google.!", err);
    }
  };

  const logout = async () => {
    await signOut(auth);
    alert("Logout successfully.!");
  };

  useEffect(() => {
    const stop = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => stop();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h2>Name:{user.displayName}</h2>
          <h3>Email:{user.email}</h3>
          <img src={user.photoURL} alt="" />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={authLogin}>Continue With Google</button>
      )}
    </div>
  );
};

export default Login;
