import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <h2 className="logo">Portfolio.</h2>
      <div className="links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Experiance</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}
