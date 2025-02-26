import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css"; // Import CSS file for styling

const Welcome = () => {
  const navigate = useNavigate(); // Hook for page navigation

  return (
    <div className="welcome-container">
      {/* Browser-like header
      <div className="browser-header"></div> */}

      {/* Welcome message */}
      <h2>Welcome to Users Module</h2>

      {/* Login Section */}
      <div className="user-actions">
        <p>
          <b>Existing Users</b>
        </p>
        <button onClick={() => navigate("/login")}>Login</button>

        {/* Register Section */}
        <p>
          <b>New Users</b>
        </p>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default Welcome;
