import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";

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
        <a
          href="https://www.instagram.com/erika_and_luma/"
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
