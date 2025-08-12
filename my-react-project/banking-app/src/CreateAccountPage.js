import React, { useState } from "react";

function CreateAccountPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    branch: "",
    password: "",
  });

  const [accounts, setAccounts] = useState([]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAccounts([...accounts, formData]);
    setFormData({ name: "", mobile: "", branch: "", password: "" });
    alert("You have successfully created your bank account!");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-4">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-700 mb-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Create Your Bank Account
        </h2>

        <label className="block mb-2 font-semibold text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-600 bg-gray-900 text-white rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <label className="block mb-2 font-semibold text-gray-300">
          Mobile Number
        </label>
        <input
          type="number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="w-full border border-gray-600 bg-gray-900 text-white rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <label className="block mb-2 font-semibold text-gray-300">
          Select Branch
        </label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
          className="w-full border border-gray-600 bg-gray-900 text-white rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="">Select your bank branch</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Panipat">Panipat</option>
        </select>

        <label className="block mb-2 font-semibold text-gray-300">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border border-gray-600 bg-gray-900 text-white rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-500 transition-colors font-semibold shadow-md"
        >
          Submit
        </button>
      </form>

      {/* Accounts Table */}
      {accounts.length > 0 && (
        <div className="overflow-hidden rounded-xl shadow-lg w-full max-w-4xl border border-gray-700">
          <table className="table-auto w-full bg-gray-800 text-white border-collapse">
            <thead className="bg-gray-700">
              <tr>
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Mobile</th>
                <th className="border border-gray-600 px-4 py-2">Branch</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((acc, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-600 transition-colors"
                >
                  <td className="border border-gray-600 px-4 py-2">
                    {acc.name}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {acc.mobile}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">
                    {acc.branch}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CreateAccountPage;
