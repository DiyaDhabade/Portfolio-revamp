import React, { Component } from "react";
import "./Projects.css";
import sexedify from "../../assets/sexedifyimg.png";

class Projects extends Component {
  render() {
    return (
      <div className="project-content" id="Projects">
        <h1>Projects</h1>
        <div className="project-box">
          <h2>SexEdify</h2>
          <div className="project-container">
            <img src={sexedify} />
            <div className="project-text">
              <p>
                A haven for safe learning and conversation about sex-ed.
                SexEdify is a portal to enable teenagers and young adults to
                have a safe space on the internet to learn more about the
                natural processes of growing up without any discomfort or
                stigma. We developed this portal for the NIT-R Hackathon in 36
                hours using React and GraphQL and came in first overall.
              </p>
              <div className="project-links">
                <a href="https://sexedify.co/">Website Demo</a>
                <a href="https://github.com/Arushigandhi/SexEdify">
                  Github Respository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
