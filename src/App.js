import React, { useDeferredValue, useState } from "react";
import "./App.css";
function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");

  const forCelsius = (e) => {
    const value = e.target.value;
    setCelsius(value);
    // (0°C × 9/5) + 32 = 32°F
    setFahrenheit((value * 9) / 5 + 32);
    // 0°C + 273.15 = 273.15K
    setKelvin(parseFloat(value) + 273.15);
  };
  const forFahrenheit = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    // (0°F − 32) × 5/9 = -17.78°C
    setCelsius(((value - 32) * 5) / 9);
    // (0°F − 32) × 5/9 + 273.15 = 255.372K
    setKelvin((value - 32) * (5 / 9) + 273.15);
  };
  const forKelvin = (e) => {
    const value = e.target.value;
    setKelvin(value);
    // 0K − 273.15 = -273.1°C
    setCelsius(value - 273.15);
    // (0K − 273.15) × 9/5 + 32 = -459.7°F
    setFahrenheit(((value - 273.15) * 9) / 5 + 32);
  };
  return (
    <div className="App">
      <h1>Temp Converter</h1>
      <div>
        <label>Celsius</label>
        <input type="number" value={celsius} onChange={forCelsius} />
      </div>

      <div>
        <label>Fahrenheit</label>
        <input type="number" value={fahrenheit} onChange={forFahrenheit} />
      </div>

      <div>
        <label>Kelvin</label>
        <input type="number" value={kelvin} onChange={forKelvin} />
      </div>
    </div>
  );
}

export default App;
