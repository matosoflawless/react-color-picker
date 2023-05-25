import React, { useState } from "react";

function App() {
  const [color1, setColor1] = useState("#FFFFFF");
  const [color2, setColor2] = useState("#FFFFFF");
  const buttonStyle = { color: color1 };
  const [errorText, setErrorText] = useState("");

  const handleChange = (event) => {
    setColor1(event.target.value);
  };

  const colorStartsWith = () => {
    if (color1.startsWith("#") && color1.length === 7) {
      setErrorText("All good");
    } else {
      setErrorText("Invalid Color");
    }
  };

  return (
    <div className="app">
      <h2>Pick a color!</h2>

      <input
        type="color"
        value={color1}
        onChange={(event) => setColor1(event.target.value)}
      />

      <div className="box" style={{ backgroundColor: color1 }}></div>

      <input
        style={buttonStyle}
        placeholder="color"
        value={color1}
        onChange={handleChange}
      />

<div>
    <p> </p>
      <button onClick={colorStartsWith}>Check Color</button>
      <p>{errorText}</p>
      <button onClick={colorStartsWith}>Check Color</button>
      </div>

      <h2>Pick a color again!</h2>

      <input
        type="color"
        value={color2}
        onChange={(event) => setColor2(event.target.value)}
      />

      <div className="box" style={{ backgroundColor: color2 }}></div>

      <input
        style={buttonStyle}
        placeholder="color"
        value={color2}
        onChange={handleChange}
      />
  <div>
    <p> </p>
      <button onClick={colorStartsWith}>Check Color</button>
      <p>{errorText}</p>
      <button onClick={colorStartsWith}>Check Color</button>
      </div>
    </div>
  );
}

export default App;
