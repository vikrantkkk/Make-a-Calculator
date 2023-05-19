import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState('');

  const handleChange = (e) => {
    setData(data.concat(e.target.value));
  };

  const handleClear = () => {
    setData('');
  };

  const calculate = () => {
    setData(eval(data).toString());
  };

  return (
    <div className="container">
      <input
        className="inputArea"
        id="inputvalues"
        placeholder="0"
        value={data}
      />
      <input
        type="button"
        value="9"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="6"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="3"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="0"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="/"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={handleChange}
      />
      <input
        type="button"
        value="clear"
        className="button button1"
        onClick={handleClear}
      />
      <input
        type="button"
        value="="
        className="button button1"
        onClick={calculate}
      />
    </div>
  );
}
