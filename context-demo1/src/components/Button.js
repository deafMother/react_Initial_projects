import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  // we have to name it contextType, this will link the default contenxt to this component
  // static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Voorlagen")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    //const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
