import React from 'react';
import { round } from '../common/math';

export default () => {
  let [celsius, setCelsius] = React.useState(0.0);
  let [farenheit, setFarenheit] = React.useState(0.0);

  let onChangeCelsius = (e) => {
    const cs = e.target.value;
    setCelsius(cs);
    setFarenheit(round(32.0 + (cs * 9.0) / 5.0, 2));
  };

  let onChangeFarenheit = (e) => {
    const fn = e.target.value;
    setFarenheit(fn);
    setCelsius(round(-32.0 + (fn * 5.0) / 9.0, 2));
  };

  return (
    <div className="app-temperature">
      <div className="app-title">Temperature Converter</div>
      <div className="css-grid">
        <div className="css-grid-box">
          <label>Celsius</label>
          <input type="number" value={celsius} onChange={onChangeCelsius} />
        </div>
        <div className="css-grid-box">=</div>
        <div className="css-grid-box">
          <label>Farenheit</label>
          <input type="number" value={farenheit} onChange={onChangeFarenheit} />
        </div>
      </div>
    </div>
  );
};
