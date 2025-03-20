import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import BlogList from "./BlogList";
import BlogPost from "./BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
