import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#FFFFFF");
  const buttonStyle = { color: color };
  const handleChange = (event) => {setColor(event.target.value)}
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
      <input style={buttonStyle} placeholder={"color"} value={color} onChange={handleChange}></input>
      <button></button>
    </div>
  );
}

export default App;
