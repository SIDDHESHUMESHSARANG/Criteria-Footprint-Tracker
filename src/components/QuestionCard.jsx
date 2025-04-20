import React from "react";

const QuestionCard = ({ question, options, selected, onSelect }) => {
  return (
    <div className="card">
      <h2>{question}</h2>
      <div>
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(opt)}
            className={`option-button${selected === opt ? " selected" : ""}`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
