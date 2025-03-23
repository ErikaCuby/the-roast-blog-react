import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2025 The Roast Blog. All rights reserved. Coded by{" "}
        <a
          href="https://www.erikakubickova.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Erika Cuby
        </a>
        .
      </p>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/ErikaCuby/the-roast-blog-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
