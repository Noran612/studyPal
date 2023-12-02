import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link ,Navigate } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <div>
        <Header user={user} />
        <Routes>
          <Route path="/signin" element={user ? <Navigate to="/" /> : <SignIn />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
          <Route path="/" element={user ? <MainPage /> : <Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
