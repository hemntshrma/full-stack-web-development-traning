import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header2({ setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/home"); 
  }

  return (
    <nav className="bg-green-500 px-6 py-4 flex justify-between items-center text-white">
      <div className="flex gap-4">
        <Link to="/home" >
          Home
        </Link>
        <Link to="/transactions">
          Transactions
        </Link>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Header2;
