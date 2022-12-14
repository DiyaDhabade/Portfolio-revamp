import React, { Component } from "react";
import "./Workexp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import fiedralogo from "../../assets/fiedralogo.png";
import santanetlogo from "../../assets/santanetlogo.jpeg";
import manaslogo from "../../assets/manaslogo.png";

class WorkExp extends Component {
  render() {
    return (
      <div className="Work-content">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement className="vertical-timeline-element--work">
            <a href="https://fiedra.com/">
              <img src={fiedralogo} alt="" />
              <h3 className="vertical-timeline-element-title">Fiedra LLC</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Software Developement Intern
              </h4>
              <h5 className="vertical-timeline-date">
                October 2021 - January 2022
              </h5>
              <p>
                Fiedra is a social networking platform for long-form content.
                Fiedra allows writers to post blog content on their websites,
                follow other writers, and reach a vast network through their
                writing. For a duration of three months, I have worked on
                developing a web application akin to the deployed iOS app, using
                ReactJS, Redux, and Parse Server.
              </p>
            </a>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work">
            <a href="https://www.linkedin.com/company/santanet-npo/about/">
              <img src={santanetlogo} alt="" />
              <h3 className="vertical-timeline-element-title">SantaNet</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Web Development Intern
              </h4>
              <a href="/">
                SantaNet is a social service organization that aims to educate
                and uplift the less privileged. Using technology, SantaNet wants
                to dramatically increase transparency in donations and
                automation in practical education for the less privileged and
                volunteers for educating and spreading awareness among children
                in orphanages, foster homes, and special education centers. They
                focus on holistic development through our well-designed
                application and meticulously curated courses on social
                awareness, STEM-made fun, and sexual education. I have worked
                with ReactJS to develop the web application.
              </a>
            </a>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work">
            <a href="https://www.projectmanas.in/">
              <img src={manaslogo} alt="" />
              <h3 className="vertical-timeline-element-title">Project MANAS</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Management Team Member
              </h4>
              <h5 className="vertical-timeline-date">
                October 2021 - January 2022
              </h5>
              <a href="/">
                Project MANAS is the official AI and Robotics team of MAHE,
                Manipal. Project MANAS aims to inspire advanced research in
                artificial intelligence and oversee its implementation, enabling
                automated systems to be made available to the generous populous.
                As a member of the management team, I was responsible for
                revamping the project website and handling the social media
                accounts. I designed and developed a website for the team using
                ReactJS to increase front-end performance by 20%.
              </a>
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}
export default WorkExp;
