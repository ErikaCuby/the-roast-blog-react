import React, { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="header">
      <h1>Luma & Erika Conversations</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button onClick={toggleDarkMode} className="toggle-btn">
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
