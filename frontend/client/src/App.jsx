import React from "react";
import Login from "./loginForm";
import Signup from "./SignUp";
// import Home from "./Components/Home";
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Render Login at root ("/") */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}
