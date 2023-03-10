import React from "react";
import Background from "../assets/Background.svg"
import { useCollection } from '../firebase/useCollection'
import Functions from "../firebase/Functions";


function Titlepage(props) {
  

  function handleClick() {
    //console.log(users[0]['score']);
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
      <Functions/>
    </div>
  );
}

export default Titlepage;
