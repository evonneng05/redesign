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
        <div class="rounded-lg w-3/4 h-1/3 bg-[#F9F4CC] border-8 border-white relative z-0">
          <div class="rounded-lg absolute top-[-75px] left-1/2 transform -translate-x-1/2 w-3/4 h-1/5 bg-[#3693C7] border-8 border-white z-10">
            <div class="welcome-text">Welcome</div>
          </div>
          <div class="rounded-lg absolute inset-4 border-dashed border-4 border-[#E7C69F]"></div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
