import React from 'react';

const Calculator = () => (
  <div className="container">
    <div className="calculator_container">
      <div className="input_field"><input type="text" /></div>
      <div className="first_row row">
        <span>AC</span>
        <span>+/-</span>
        <span>%</span>
        <span>/</span>
      </div>
      <div className="second_row row">
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>x</span>
      </div>
      <div className="third_row row">
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>-</span>
      </div>
      <div className="fourth_row row">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>+</span>
      </div>
      <div className="fifth_row row">
        <span className="zero">0</span>
        <span>.</span>
        <span>=</span>
      </div>
    </div>
  </div>
);

export default Calculator;
