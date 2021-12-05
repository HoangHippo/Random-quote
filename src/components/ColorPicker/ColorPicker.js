import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    const { colors } = props;
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
    const { colors, activeColor, handleActiveColor } = this.props;
    return (
      <div className="ColorPicker">
        {colors.map((color) => {
          const style = { backgroundColor: color };
          const cls =
            color === activeColor ? "color-item active" : "color-item";
          return (
            <span
              key={color}
              className={cls}
              style={style}
              onClick={() => handleActiveColor(color)}
            ></span>
          );
        })}
      </div>
    );
  }
}
export default ColorPicker;
