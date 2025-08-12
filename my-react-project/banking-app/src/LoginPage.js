import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setIsLoggedIn }) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // You can add real authentication here
    if (mobile && password) {
      setIsLoggedIn(true); // Switch header to Header2
      navigate("/home");   // Redirect after login
    }

    setMobile("");
    setPassword("");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-200 p-4">
      <div className="bg-cyan-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-cyan-900 mb-6">
          Login to Your Bank Account
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold text-cyan-900">
            Mobile Number
          </label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full border border-cyan-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <label className="block mb-2 font-semibold text-cyan-900">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-cyan-300 rounded p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            type="submit"
            className="w-full bg-cyan-700 text-white py-2 rounded hover:bg-cyan-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
