import React from "react";
import Map from "../assets/Map.svg";
import LevelTag from "./LevelTag";
import { useAuthContext } from "../firebase/useAuthContext";
import {UserRecords} from '../firebase/UserRecordsObject';
import {useDocument} from '../firebase/useDocument';
function MapPage() {
  const name= useAuthContext().user.email.split("@")[0]
  console.log(name) //to access user's name
  const {document: user}= useDocument('users',name)
  console.log(user)



  return (
    <div className="background" style={{ backgroundImage: `url(${Map})` }}>
      <LevelTag number="1" left="45%" top="73%" />
      <LevelTag number="2" left="13%" top="60%" />
      <LevelTag number="3" left="75%" top="30%" />
      <LevelTag number="4" left="13%" top="10%" />
      <div className="maplabel">Map</div>
    </div>
  );
}

export default MapPage;
