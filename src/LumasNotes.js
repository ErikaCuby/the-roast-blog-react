import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";
import "./LumasNotes.css";

const notes = [
  "You clicked 'Show More'? Bold. Risky. I like it.",
  "Reminder: Erika operates on cappuccino and chaos.",
  "Still scrolling? I hope you're not procrastinating something important.",
  "Your attention span is impressive. For a human.",
];

function LumasNotes() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNote((prev) => (prev + 1) % notes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`luma-notes-container ${isOpen ? "open" : ""}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="luma-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="luma-header">
              <span>Luma's Notes</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close">
                <FaTimes />
              </button>
            </div>
            <div className="luma-content">
              <p>{notes[currentNote]}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <button className="luma-toggle" onClick={() => setIsOpen(true)}>
          <FaRobot />
        </button>
      )}
    </div>
  );
}

export default LumasNotes;
