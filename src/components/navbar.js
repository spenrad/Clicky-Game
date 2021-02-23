import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className="">Click a monkey!</li>
        <li>Score: 0 | Top Score: 0</li>
      </ul>
    </nav>
  );
}

export default Navbar;
