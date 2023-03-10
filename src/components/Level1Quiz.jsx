import React, { useState } from "react";
import level1 from "../level1";

function Level1Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(0);

  const { question, choices, answer } = level1[activeQuestion];
  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) => (selectedAnswer ? prev + 1 : prev));
    if (activeQuestion != 4) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };
  const onAnsSelected = (ans, index) => {
    setSelectedAnswerIndex(index);
    if (ans === answer) {
      setSelectedAnswer(true);
      console.log("correct");
    } else {
      setSelectedAnswer(false);
    }
  };
  function completeLevel() {
    console.log(result);
  }
  return (
    <div>
      <h1>Level 1</h1>
      {!showResult ? (
        <div>
          <h2>{question}</h2>
          <ul>
            {choices.map((ans, index) => (
              <button
                onClick={() => onAnsSelected(ans, index)}
                key={ans}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {ans}
              </button>
            ))}
          </ul>
          <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
            Next
          </button>
        </div>
      ) : (
        <button onClick={completeLevel}> complete </button>
      )}
    </div>
  );
}

export default Level1Quiz;
