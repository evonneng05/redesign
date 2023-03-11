import React from "react";
import Map from "../assets/Map.svg";
import LevelTag from "./LevelTag";
import { useAuthContext } from "../firebase/useAuthContext";
import {useDocument} from '../firebase/useDocument';
import { useEffect } from "react";
function MapPage() {
  const name= useAuthContext().user.email.split("@")[0]
  console.log(name) //to access user's name
  var score=[0,10,10,10,10] //more than 5= locked
  

  return (
    <div className="background" style={{ backgroundImage: `url(${Map})` }}>
      <LevelTag number="1" left="45%" top="73%" score={score[0]}/>
      <LevelTag number="2" left="13%" top="60%" score={score[1]}/>
      <LevelTag number="3" left="75%" top="30%" score={score[2]}/>
      <LevelTag number="4" left="13%" top="10%" score={score[3]}/>
      <div className="maplabel">Map</div>
    </div>
  );
}

export default MapPage;
