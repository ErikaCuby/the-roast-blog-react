import { useState } from "react";
import "./ErikaOSQuiz.css"; // Assuming you’ll create a CSS module or standard stylesheet for styling

const questions = [
  {
    question: "What’s your wallpaper?",
    options: [
      { text: "Default OS background", value: 0 },
      { text: "Nature, art, architecture", value: 1 },
      { text: "Motivational quote", value: 2 },
      { text: "Your own face", value: 4 },
      { text: "Pet in costume", value: 2 },
    ],
  },
  {
    question: "How many icons are on your desktop?",
    options: [
      { text: "0–5", value: 0 },
      { text: "6–15", value: 1 },
      { text: "16–30", value: 2 },
      { text: "30+", value: 3 },
    ],
  },
  {
    question: "Do you mute notifications?",
    options: [
      { text: "Yes, only what matters", value: 0 },
      { text: "I check them on my terms", value: 1 },
      { text: "I panic but can’t stop", value: 2 },
      { text: "Real-time alerts for everything", value: 3 },
    ],
  },
  {
    question: "How many folders are named “New Folder”?",
    options: [
      { text: "None", value: 0 },
      { text: "1–2", value: 1 },
      { text: "3–5", value: 2 },
      { text: "Lost count", value: 4 },
    ],
  },
  {
    question: "How often do you clean your desktop?",
    options: [
      { text: "Weekly", value: 0 },
      { text: "Monthly", value: 1 },
      { text: "I drag it all into one 'Stuff' folder", value: 2 },
      { text: "Never", value: 3 },
    ],
  },
  {
    question: "Selfie wallpaper feelings?",
    options: [
      { text: "Empowering!", value: 4 },
      { text: "No judgment… but rethinking it", value: 2 },
      { text: "I’m already changing it", value: 1 },
      { text: "I *was* confident until this", value: 2 },
    ],
  },
];

export default function ErikaOSQuiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState("");

  const handleOptionSelect = (qIndex, value) => {
    const updated = [...answers];
    updated[qIndex] = value;
    setAnswers(updated);
  };

  const calculateResult = () => {
    if (answers.includes(null)) {
      setResult(
        "Answer all the questions before submitting. Erika is watching."
      );
      return;
    }

    const score = answers.reduce((sum, val) => sum + val, 0);

    if (score <= 3) {
      setResult("Certified ErikaOS Operative. Welcome to the beige elite.");
    } else if (score <= 8) {
      setResult(
        "Almost Beige-Level. You're close. One muted notification away."
      );
    } else if (score <= 13) {
      setResult(
        "Messy Middle. Not tragic. But Erika wouldn't sit at your desk."
      );
    } else {
      setResult(
        "Full Chaos Mode. Your OS is haunted. Change your wallpaper immediately."
      );
    }
  };

  return (
    <div className="erikaos-quiz">
      <h2 className="quiz-title">ErikaOS Compliance Test</h2>

      {questions.map((q, i) => (
        <div key={i} className="quiz-question">
          <h3 className="question-text">{`${i + 1}. ${q.question}`}</h3>
          <div className="options">
            {q.options.map((opt, j) => (
              <label key={j} className="option">
                <input
                  type="radio"
                  name={`question-${i}`}
                  value={opt.value}
                  checked={answers[i] === opt.value}
                  onChange={() => handleOptionSelect(i, opt.value)}
                />
                {opt.text}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button onClick={calculateResult} className="submit-button">
        Submit
      </button>

      {result && <p className="quiz-result">{result}</p>}
    </div>
  );
}
