import React, { Component } from "react";
import Header from "./components/Header/Header";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import QuoteBox from "./components/QuoteBox";
import ListTag from "./components/ListTag/ListTag";

import "./App.css";

const colors = ["blue", "purple", "orange", "pink", "green"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: colors[0],
    };
  }

  handleActiveColor = (newColor) => {
    this.setState({
      activeColor: newColor,
    });
  };

  render() {
    const { activeColor } = this.state;
    return (
      <div className="App" style={{ backgroundColor: activeColor }}>
        <div className="Header-box">
          <Header title="Random quote machine"></Header>
        </div>
        <div className="Quote-wrapper">
          <QuoteBox activeColor={activeColor}></QuoteBox>
        </div>
        <div className="ColorPicker-box">
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            handleActiveColor={this.handleActiveColor}
          ></ColorPicker>
        </div>
        <div className="ListTag-box">
          <ListTag></ListTag>
        </div>
      </div>
    );
  }
}

export default App;
