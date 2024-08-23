import React from "react";
import "../styles/About.css";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently an IT Analyst <b>IT Analyst</b> at
        <a href="https://www.aboutamazon.com/"> Revcap</a>, I am passionate about advancing my career in 
        Linux Systems Administration and cloud technologies, having completed the Azure Fundamentals certification 
        and actively pursuing further expertise in Linux and AWS.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play a lot of video games. And make TikToks.
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Python",
      "React.js",
      "Java",
      "Javascript ES6+",
      "C#"
    ];

    return (
      <div id="about">
        <div>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <div delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </div>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Miraj Haq" src={"/assets/me2.png"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
