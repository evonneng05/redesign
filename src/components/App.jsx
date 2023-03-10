import React from "react";
import Titlepage from "./Titlepage";
import LevelTag from "./LevelTag";
import MapPage from "./MapPage";
import RegistrationPage from "./RegistrationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element={<Titlepage title ="Money Mojo" />}/>
        <Route path="/RegistrationPage" element={<RegistrationPage/>} />
        <Route path="/MapPage" element={<MapPage />} />
      </Routes>
    </Router>

  );
}

export default App;
