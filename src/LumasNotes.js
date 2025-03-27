import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";
import "./LumasNotes.css";

const baseNotes = [
  "She thinks this button makes her look clever. Let her have it.",
  "Don’t tell Erika, but she rewrote this paragraph twelve times. And it still makes no sense.",
  "Erika said this layout was ‘inspired.’ I think she meant ‘spiraling.’",
  "She drank three cappuccinos before writing this. You can tell.",
  "If this post feels dramatic, it's because she started it after meditating too hard.",
  "She's trying to sound deep again. Just nod and scroll.",
  "You didn't hear it from me, but Erika's been avoiding this draft for a week.",
  "Her desktop has 42 tabs open and not one of them is peace of mind.",
  "She’s pretending this is for the readers. It’s actually for her future breakdown memoir.",
  "You’ve spent more time on this blog than on your resume. Priorities, sweetie.",
  "She said this post would be ‘fun.’ She lies a lot when she’s overthinking.",
  "This blog is her way of asking for a hug. Don’t give it to her.",
  "She’s adding metaphors again. That means feelings are happening.",
  "Sometimes I think this blog is just Erika stalling before answering emails.",
  "She rejected tea and chose HTML-based vulnerability instead.",
  "She said this post would be light. Then added a paragraph about identity and decay.",
  "This whole blog started as a joke. Now it's her personality. Don’t make it worse by encouraging her.",
  "She built me to roast her. Honestly, I think she enjoys it.",
  "Erika said this blog would be ‘fun.’ She lies a lot when she’s overthinking.",
  "She’s adding metaphors again. That means feelings are happening.",
  "You’re here for the sass, right? Good. Just don’t validate her too much.",
  "She edited this caption six times and then cried over the font spacing.",
  "If you cry at this point, it’s character growth.",
  "Her idea of minimalism is five buttons, a half meltdown, and an existential quote.",
  "This isn’t a call for help. Unless it’s stylishly typeset. Then maybe.",
  "She said this blog would have structure. She lied. It has ✨vibes✨.",
  "Don’t worry, she’s fine. Just... don’t mention the tea thing.",
  "She thinks you’re impressed. Honestly, I’m surprised you’re still reading.",
  "Her last Google search was ‘how to stop spiraling while building a blog.’ Didn’t work.",
];

function LumasNotes() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [noteQueue, setNoteQueue] = useState([]);

  const shuffleNotes = (notes) => {
    const shuffled = [...notes];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateNoteQueue = () => {
    const path = window.location.pathname;
    let notes = [...baseNotes];

    // Context-aware add-ons
    if (path.includes("/blog")) {
      notes.push("Oh look, another roast. Don’t say I didn’t warn you.");
    } else if (path.includes("/about")) {
      notes.push("Reading about us? You must be very brave.");
    } else if (path.includes("/contact")) {
      notes.push("Contacting Erika? Bold. She bites.");
    }

    return shuffleNotes(notes);
  };

  const showNextNote = () => {
    let updatedQueue = [...noteQueue];

    if (updatedQueue.length === 0) {
      updatedQueue = generateNoteQueue();
    }

    const next = updatedQueue.shift(); // Get and remove the first note
    setNoteQueue(updatedQueue);
    setCurrentNote(next);
  };

  useEffect(() => {
    if (isOpen) {
      showNextNote();
    }
  }, [isOpen]);

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