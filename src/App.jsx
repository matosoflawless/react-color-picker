import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#FFFFFF");
  const buttonStyle = { color: "red" };
  return (
    <div className="app">
      <h2>Pick a color!</h2>
      <input
        type="color"
        value={color}
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <div className="box" style={{ backgroundColor: color }}></div>
      <input style={buttonStyle} value={color}></input>
      <button ></button>
    </div>
  );
}

export default App;
