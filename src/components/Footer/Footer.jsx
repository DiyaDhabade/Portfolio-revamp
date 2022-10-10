import React, { Component } from "react";
import "./Footer.css";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <h1>
          <a href="mailto:diyaddhabade@gmail.com">
            Mail to: diyaddhabade@gmail.com
          </a>
        </h1>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/diya-dhabade-7267b6210/">
            <FaLinkedinIn size={32} />
          </a>
          <a href="https://www.instagram.com/_diyadhabade_/">
            <FaInstagram size={32} />
          </a>
          <a href="https://github.com/DiyaDhabade">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
