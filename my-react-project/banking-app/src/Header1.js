import React from "react";
import { Link } from "react-router-dom";

function Header1() {
  return (
    <nav className="bg-gradient-to-r from-[#0F2027] via-[#2C5364] to-[#1A2980] px-6 py-4 flex justify-between items-center text-white shadow-lg">
      {/* Left side */}
      <Link
        to="/home"
        className="text-lg font-bold tracking-wide hover:text-cyan-300 hover:scale-105 transition-transform"
      >
        Home
      </Link>

      {/* Right side */}
      <div className="flex gap-4">
        <Link
          to="/create"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Header1;
