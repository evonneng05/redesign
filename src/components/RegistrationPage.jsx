import React, { useState } from "react";
import RegistrationBackground from "../assets/Background.svg";


function RegistrationPage() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div
    className="background"
    style={{
      backgroundImage: `url(${RegistrationBackground})`,
    }}
  >
    <div class="flex flex-col items-center justify-center h-screen">
  <div class="rounded-lg w-3/4 h-1/3 bg-[#F9F4CC] border-8 border-black relative">
    <div class="absolute top-[-75px] left-1/2 transform -translate-x-1/2 w-1/2 h-1/5 bg-red-400 border-8 border-black"></div>
  </div>
</div>
</div>

  
  );
}

export default RegistrationPage;
