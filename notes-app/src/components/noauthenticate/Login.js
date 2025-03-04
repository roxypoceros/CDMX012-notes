import React from "react";
import "../styles/Login.css";
import "../styles/Button.css";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";

const Login = ({ LoginWithGoogle }) => {
  return (
    <div className="mainContainerLogin">
      <section className="brownRectangle">
        <img
          className="bigRosettaLogo"
          src="https://i.imgur.com/pS4YttT.png"
          alt="rosetta Logo"
        ></img>
        <h1>All your ideas in one place.</h1>
        <h1>Write your lists, create notes.</h1>
        {/* Botón Google */}
        <button className="GoogleBtn" onClick={LoginWithGoogle}>
          <FcGoogle /> Login with Google{" "}
        </button>
      </section>
      <footer>
      <p>2022 | <a href="https://www.linkedin.com/in/roxypoceros/" target="_blank" rel="noreferrer">  <BsLinkedin /> Roxana Hernández </a>   </p> 
      </footer>
      <img
        className="backgroundImage"
        src="https://i.imgur.com/N9pCgiX.jpg?1"
        alt="bokeh background"
      ></img>
    </div>
  );
};

export default Login;
