import { Component } from "react";

import "./index.css";

import image1 from "../../images/image1.png";

class Calculator extends Component {
  state = { inputText: "" };

  changeText = (event) => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    const { inputText } = this.state;
    return (
      <div className="align-things">
        <div>
          <input
            placeholder="Enter the text"
            type="text"
            value={inputText}
            onChange={this.changeText}
          />
          <p>length of the input text is {inputText.length} </p>
        </div>
        <img src={image1} alt="just a pic" />
      </div>
    );
  }
}

export default Calculator;
