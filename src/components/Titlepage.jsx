import React from "react";
import Background from "../assets/Background.svg";
function Titlepage(props) {
  function handleClick() {
    alert("working");
  }
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
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
