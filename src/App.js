import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
