import React from "react";
import MapBackground from "../assets/MapBackground.svg";
import ScoreBackground from "../assets/ScoreBackground.svg";
import Stars from "./Stars";
import HomeBtn from "../assets/HomeBtn.svg";
import ReplayBtn from "../assets/ReplayBtn.svg";
import ContinueBtn from "../assets/ContinueBtn.svg";

function ScorePage() {
  function homeClick() {
    alert("Home button working");
  }
  function replayClick() {
    alert("Replay button working");
  }
  function nextClick() {
    alert("Continue button working");
  }
  return (
    <div
      className="background sp-bg"
      style={{ backgroundImage: `url(${MapBackground})` }}
    >
      <div className="center-container">
        <img className="score-bg" src={ScoreBackground} alt="ScoreBackground" />
        <Stars />
      </div>
      <div className="level-title">Level 1</div>
      <div className="score">Score</div>
      <div className="score-num">5/5</div>
      <div className="success-msg">Complete!</div>
      <div className="btn-container">
        <div className="btn-center">
          <button
            type="button"
            className="tag"
            onClick={homeClick}
            style={{
              backgroundImage: `url(${HomeBtn})`,
              height: "200px",
              width: "200px",
            }}
          />
        </div>
        <div className="btn-center">
          <button
            type="button"
            className="tag"
            onClick={replayClick}
            style={{
              backgroundImage: `url(${ReplayBtn})`,
              height: "200px",
              width: "200px",
            }}
          />
        </div>
        <div className="btn-center">
          <button
            type="button"
            className="tag"
            onClick={nextClick}
            style={{
              backgroundImage: `url(${ContinueBtn})`,
              height: "200px",
              width: "200px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScorePage;
