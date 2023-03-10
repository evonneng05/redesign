import React from "react";
import Tag from "../assets/Leveltag.svg";
function LevelTag(props) {
  function levelClick() {
    alert("Level " + props.number);
  }
  return (
    <button
      className="tag"
      type="button"
      onClick={levelClick}
      style={{
        backgroundImage: `url(${Tag})`,
        left: props.left,
        top: props.top,
        
      }}
    >
      <h1 className="number">{props.number}</h1>
    </button>
  );
}

export default LevelTag;
