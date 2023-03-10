import React from "react";
import MapBackground from "../assets/MapBackground.svg";
import ScoreBackground from "../assets/ScoreBackground.svg";
import Stars from "./Stars";
import HomeBtn from "../assets/HomeBtn.svg";
import ReplayBtn from "../assets/ReplayBtn.svg";
import ContinueBtn from "../assets/ContinueBtn.svg";
import { useNavigate } from "react-router-dom";


function ScorePage(props) {
  const navigate = useNavigate();
  function homeClick() {
    navigate("/MapPage"); //map
  }
  function replayClick() {
    navigate("/MapPage"); //TODO
  }
  function nextClick() {
    navigate("/MapPage"); //TODO
  }
  var starCount=[0,0,0];
  if (props.score>5){
    starCount=[1,1,1];
  }else if (props.score>2){
    starCount=[1,1,0];
  }else if (props.score>0){
    starCount=[1,0,0];
  }
  return (
    <div
      className="background sp-bg"
      style={{ backgroundImage: `url(${MapBackground})` }}
    >
      <div className="center-container">
        <img className="score-bg" src={ScoreBackground} alt="ScoreBackground" />
        <Stars
          count={starCount}
        />
      </div>
      <div className="level-title">Level {props.level}</div>
      <div className="score">Score</div>
      <div className="score-num">{props.score}/5</div>
      <div className="success-msg">{props.score==5?'Complete!':'Try Again!'}</div>
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
