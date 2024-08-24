import React from "react";
import "../styles/Intro.css";
import EmailRoundedIcon from "@mui/icons-material//EmailRounded";


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
        <div className="typist" avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"miraj"}</span>
            {" here."}
          </span>
        </div>
        <div>
          <div className="intro-subtitle">I don't know what to do.</div>
          <div className="intro-desc">
            I'm a guy from London.
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
