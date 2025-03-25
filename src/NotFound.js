import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "4rem",
        fontFamily: "'Work Sans', sans-serif",
        color: "#333",
      }}
    >
      <img
        src="/images/luma-404.jpg"
        alt="Glitchy Luma fading"
        style={{
          maxWidth: "320px",
          marginBottom: "2rem",
          filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))",
        }}
      />
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        404 – Page Not Found
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#666" }}>
        “This page ghosted us. I’m handling it really well, as you can see.”
        <br />
        <span style={{ fontStyle: "italic", color: "#aaa" }}>
          – Luma, mid-meltdown
        </span>
      </p>
      <Link
        to="/"
        style={{
          fontSize: "15px",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#f2e8e4",
          color: "#333",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        Go back Home before I disappear too
      </Link>
    </div>
  );
}

export default NotFound;
// This component will display a 404 error message with a glitchy image of Luma, the blog mascot. It also includes a link to the home page. You can customize the styles and content of this component to match your blog’s theme.
