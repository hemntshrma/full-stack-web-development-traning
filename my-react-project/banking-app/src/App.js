import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header1 from "./Header1";
import Header2 from "./Header2";
import HomePage from "./HomePage";
import CreateAccountPage from "./CreateAccountPage";
import LoginPage from "./LoginPage";
import Footer from "./Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {/* Show Header1 or Header2 based on login state */}
      {isLoggedIn ? (
        <Header2 setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Header1 />
      )}

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreateAccountPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
