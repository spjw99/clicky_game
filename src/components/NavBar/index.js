import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="/"  className="nav-link logo">
            Clicky Game
          </a>
        </li>
        <li className="nav-item alert_scr">
          {props.alert_msg}
        </li>
        <li className="nav-item score_scr">
          Score : {props.player_score} | Top Score : {props.top_score}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
