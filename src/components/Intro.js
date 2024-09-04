import React from "react";
import "../styles/Intro.css";
import EmailRoundedIcon from "@mui/icons-material//EmailRounded";
import FractalTree from "./FractalTree";


class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <div className="typist" avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"miraj"}</span>
            {" here."}
          </span>
        </div>
        <div>
          <div className="intro-subtitle">I'm bored.</div>
          <div className="intro-desc">
            I'm an IT Analyst from London. I specialize in optimizing IT systems and enhancing business processes. With experience in technical support, system maintenance, and project contributions, I'm focused on solving real-world challenges and driving efficiency in technology.
          </div>
          <a
            href="mailto:mirajhaq@hotmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Say hi!"}
          </a>
        </div>
      </div>
    );
  }
}

export default Intro;
