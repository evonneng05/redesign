import React from "react";
import Background from "../assets/Background.svg";
function Titlepage(props) {
  function handleClick() {
    alert("working");
  }
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <h1 className="title">{props.title}</h1>
      <button className="startbutton" type="button" onClick={handleClick}>
        Let's Go
      </button>
    </div>
  );
}

export default Titlepage;
