import React, { Component } from "react";
import "./Intro.css";
import introimg from "../../assets/introimg.jpeg";

class Intro extends Component {
  render() {
    return (
      <div className="introItems">
        <div className="intro-img">
          <img src={introimg} alt="" />
        </div>
        <div className="intro-Content">
          <h1>
            Hey, I'm Diya Dhabade, a technology enthusiast who is an ardent
            believer of using technology for good and enjoys meeting
            like-minded, passionate people!
          </h1>
          <p>
            I am an engineering undergraduate at the Manipal Institute of
            Technology, Manipal majoring in Electrical and Electronics
            Engineering. I'm a creative individual with a knack for
            problem-solving. My aim is to work towards building refined and
            accessible technology through collaboration and an innate curiosity
            to learn and grow. Currently, my work focusses in the domains of
            application development and the Internet of Things. I'm a feminist
            and believe in channeling tech for the cause.
          </p>
          <div className="intro-links">
            <a href="https://www.linkedin.com/in/diya-dhabade-7267b6210/">
              LinkedIn
            </a>
            <a href="https://github.com/DiyaDhabade">Github</a>
            <a href="https://www.instagram.com/_diyadhabade_/">Instagram</a>
            <a href="https://drive.google.com/drive/folders/1T7xrV5wAOdlY5H6yglyVV-8nI80v3nyd?usp=sharing">
              Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
