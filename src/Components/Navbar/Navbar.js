import React from "react";
import SkullCandy from "../Assets/skullcandy_logo.svg";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <img className="skullcandy" src={SkullCandy} />
    </nav>
  );
}
