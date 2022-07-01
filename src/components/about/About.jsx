import React from "react";
import "./About.css";
// import ME from "../../assets/lin_logo11pb.png";
import ME from "../../assets/lin_logoweb.png";
// import ME from "../../assets/lin_logo11pp.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <div>
      <section className="section" id="about">
        {/* <h5>Get To Know</h5> */}
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about image" />
            </div>
          </div>
          <div className="about__content">
             {/* <p>
              " I am a self-taught developer who loves to solve problems digitally
              with top notch technologies. I am specialised in web technologies."
              
            </p> */}
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Year Of Experience </small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>7+ completed </small>
              </article>
            </div>
            <p>
              " I am a self-taught developer who loves to solve problems digitally
              with top notch technologies. I am specialised in web technologies."
              
            </p>
            {/* <a href="#contact" className="btn btn-primary" >Let's Talk</a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
