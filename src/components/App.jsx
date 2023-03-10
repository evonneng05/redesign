import React from "react";
import Titlepage from "./Titlepage";
import LevelTag from "./LevelTag";
import MapPage from "./MapPage";
import ScorePage from "./ScorePage";
import { UserRecords } from "../firebase/UserRecordsObject";
import RegistrationPage from "./RegistrationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  var score=1;
  var level=1;
  return(
    <Router>
      <Routes>
        <Route path = "/" element={<Titlepage title ="Money Mojo" />}/>
        <Route path="/RegistrationPage" element={<RegistrationPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
