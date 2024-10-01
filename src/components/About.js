import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    const one = (
      <p>
        My name is Miraj, I am currently an <b>IT Analyst</b> at
        <a href="https://www.revcap.co.uk/"> Revcap</a>, I am passionate about
        advancing my career in Systems Administration and cloud technologies,
        having completed the Azure Fundamentals certification and actively
        pursuing further expertise in Linux and AWS.
      </p>
    );

    const two = (
      <p>
        
      </p>
    );

    return (
      <div id="about">
        <FadeInSection>
        <div>
          <div className="section-header">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {one}
              {/* If you want to reintroduce the tech stack, uncomment this section */}
              {/* <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <div key={i} delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </div>
                  );
                })}
              </ul> */}
              {two}
            </div>
            <div className="about-image">
              <img alt="Miraj Haq" src={"/assets/me2.png"} />
            </div>
          </div>
        </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
