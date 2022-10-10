import React, { Component } from "react";
import "./Resp.css";
import gslogo from "../../assets/gslogo.png";
import acmwlogo from "../../assets/acmwlogo.png";

class Resp extends Component {
  render() {
    return (
      <div className="resp-content">
        <h1>Positions of Responsibilities</h1>
        <div className="resp-element">
          <div className="resp-logo">
            <img src={gslogo} alt="" />
          </div>
          <div className="resp-Content">
            <h1>GirlScript Manipal</h1>
            <h3>Co-founder and Design Lead</h3>
            <p>
              GirlScript Manipal is a community we started with a vision to
              encourage novices and minorities in tech and to have the
              confidence to grow exponentially in their learning curve whilst
              developing a nurturing community. We are a community of 100+
              members and have conducted various bootcamps, competitions and
              workshops from topics ranging from Git & Github, ReactJS,
              designing in Figma and so on. We believe in inclusivity in
              technology and encourage the contribution of women and minorities
              in tech.
            </p>
          </div>
        </div>

        <div className="resp-element">
          <div className="resp-logo">
            <img src={acmwlogo} alt="" />
          </div>
          <div className="resp-Content">
            <h1>Association of Computing Machinery Women, Manipal</h1>
            <h3>General Sectretary</h3>
            <p>
              ACM-W supports, celebrates, and advocates for the full engagement
              of women in all aspects of the computing field. The Manipal
              Chapter of ACM-W wishes to carry forward the vision of ACM-W by
              establishing a society that not only motivates young girls to
              become zealous programmers but also provides them with adequate
              resources and the right mentorship at every step in their path. We
              have conducted various talks, alumni-connects and mentorship
              programs. We have also collaborated with other clubs and
              communities.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Resp;
