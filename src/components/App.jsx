import React from "react";
import Titlepage from "./Titlepage";
import LevelTag from "./LevelTag";
import MapPage from "./MapPage";
import ScorePage from "./ScorePage";
import { UserRecords } from "../firebase/UserRecordsObject";

function App() {
  var score=1;
  var level=1;

  return <ScorePage 
    score= {score}
    level={level}
  />;
}

export default App;
