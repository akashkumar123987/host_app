import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();
  const location = useLocation();
  const showLoginModal = location.state?.showLoginModal;

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {showLoginModal && <Login />}
        <Toaster />
      </div>
    </>
  );
}

export default App;
