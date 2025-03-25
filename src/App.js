import React from "react";
import { BrowserRouter as Router } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedRoutes from "./AnimatedRoutes";
import LumasNotes from "./LumasNotes";

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
      <LumasNotes />
    </Router>
  );
}

export default App;
