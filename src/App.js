import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import AnimatedRoutes from "./AnimatedRoutes"; // New!


function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
