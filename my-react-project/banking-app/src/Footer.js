import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-6 shadow-inner rounded-t-lg">
      <div className="flex flex-col items-center text-center px-4">
        <p className="text-base md:text-lg font-semibold">
          🚀 Banking React App Created By{" "}
          <span className="underline decoration-cyan-400">Hemant</span> | 🧑‍💻 IT 1st Year | 🎓 Roll No:{" "}
          <span className="font-bold text-cyan-400">28241233</span>
        </p>
        <p className="text-sm text-gray-400 mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
