import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ isAuthenticated, handleLogout }) {
  const navigate = useNavigate();

  return (
    <nav>
      <span>Tender System</span>
      {isAuthenticated ? (
        <>
          <button onClick={() => navigate("/tenders")}>Tenders</button>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;