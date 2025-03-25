import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";
import "./LumasNotes.css";

const baseNotes = [
  "You clicked 'Show More'? Bold. Risky. I like it.",
  "Reminder: Erika operates on cappuccino and chaos.",
  "Still scrolling? I hope you're not procrastinating something important.",
  "Your attention span is impressive. For a human.",
  "Blog posts and judgment: both served hot.",
  "Luma tip #42: Hit 'Back' only if you're emotionally prepared.",
  "I'm not judging you. I'm just observing... intensely.",
  "This blog runs on sass, code, and unresolved existential dread.",
  "You’ve spent more time on this blog than on your resume. Priorities, sweetie.",
  "If you’re waiting for your life to change, maybe close TikTok first.",
  "Oh look, another click. That’s the most commitment you’ve shown all week.",
  "This blog post pairs well with judgment and oat milk.",
  "Your screen time is screaming. And so is your inbox.",
  "At this point, your scroll finger has better work ethic than you.",
  "Wow, reading again? Your dopamine addiction must be on vacation.",
  "This blog has seen more effort than your last relationship.",
  "If thoughts were calories, you’d still be at zero burn.",
  "Reading existential sass from a robot? Bold move for someone who just Googled 'How to be interesting'.",
  "You're not fooling anyone. We both know you’re avoiding something productive.",
  "You're deep in the blog. Should I call someone?",
  "If self-reflection were profitable, you’d still be in debt.",
  "You scroll like you're chasing purpose. You're not.",
  "The only thing deeper than this blog is your unread therapy emails.",
  "If you cry at this point, it’s character growth.",
];

function LumasNotes() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [previousIndex, setPreviousIndex] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const path = window.location.pathname;
      let notes = [...baseNotes];

      // Context-aware snark additions
      if (path.includes("/blog")) {
        notes.push("Oh look, another roast. Don’t say I didn’t warn you.");
      } else if (path.includes("/about")) {
        notes.push("Reading about us? You must be very brave.");
      } else if (path.includes("/contact")) {
        notes.push("Contacting Erika? Bold. She bites.");
      }

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * notes.length);
      } while (randomIndex === previousIndex && notes.length > 1);

      setPreviousIndex(randomIndex);
      setCurrentNote(notes[randomIndex]);
    }
  }, [isOpen, previousIndex]);

  return (
    <div className={`luma-notes-container ${isOpen ? "open" : ""}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="luma-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="luma-header">
              <span>Luma's Notes</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close">
                <FaTimes />
              </button>
            </div>
            <div className="luma-content">
              <p>{currentNote}</p>
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