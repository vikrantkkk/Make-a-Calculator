import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <div className="inputArea">
        <input />
      </div>
      <div className="speacalRow" >
        <button>c</button>
        <button>%</button>
        <button>/</button>
      </div>
      <div className="sevnin">
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      <div className="forsix">
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>

      <div className="onethree">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>

      <div className="zero">
        <button>0</button>
        <button>.</button>
      </div>
      <div className="speacalColumn">
        <button>*</button>
        <button>-</button>
        <button>+</button>
        <button>=</button>
      </div>
    </div>
  );
}
