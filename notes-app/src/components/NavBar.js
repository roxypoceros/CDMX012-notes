import React from "react";
/* ICONS */
import { FiLogOut } from "react-icons/fi";
/* STYLES */
import "./styles/Button.css";
import "./styles/NavBar.css";

import { logOut } from "../lib/firebaseAuth.js";
import DateAndHour from "./DateAndHour";

function NavBar() {
  return (
    <>
      <nav className="navBarContent">
        {/* LOGO ROSETTA */}
        <img
          className="smallRosettaLogo"
          src="https://i.imgur.com/pS4YttT.png"
          alt="Rosetta Logo"
        ></img>

        {/* Día y hora */}

        <section>
        <DateAndHour/>
        </section>

        {/* BUTTON LOGOUT */}
        <button
          className="btnLogout"
          onClick={() => {
            logOut();
          }}
        >
          <FiLogOut /> Salir
        </button>
      </nav>
    </>
  );
}

export default NavBar;
