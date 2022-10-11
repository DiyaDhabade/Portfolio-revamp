import React, { Component } from "react";
import "./Navbar.css";
import DiyaLogo from "../../assets/DiyaLogo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="NavbarItems">
        <div className="Navbar-logo">
          <img src={DiyaLogo} alt="" />
        </div>
        <div className="Navbar-Content">
          <a href="Projects">Projects</a>
          <a href="#Work">Work</a>
          <a href="#Reseach">Research</a>
        </div>
      </div>
    );
  }
}
export default Navbar;
