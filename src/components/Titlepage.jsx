import React from "react";
import Background from "../assets/Background.svg"
import {useFetch} from '../hooks/useFetch'


function Titlepage(props) {
  const {data: users, isPending, error}= useFetch('http://localhost:3000/user')
  function handleClick() {
    alert(users['timmy']);
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
