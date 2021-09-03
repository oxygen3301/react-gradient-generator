import React from "react";
import classes from "./InputCard.module.css";

const InputCard = (props) => {
  const color1Handler = (event) => {
    props.onColor1Change(event.target.value);
  };

  const color2Handler = (event) => {
    props.onColor2Change(event.target.value);
  };
  const angleHandler = (event) => {
    props.onAngleChange(event.target.value);
  };
  const showGradientHandler = () => {
    props.onShowGradient(true);
  };
  const showCodeHandler = () => {
    props.onShowCode(!props.showCode);
  };

  return (
    <div className={`${props.showGradient && classes.hide} ${classes.card}`}>
      <h1>CSS GRADIENT GENERATOR</h1>
      <div>
        <input
          type="color"
          value={props.color1}
          onChange={color1Handler}
        ></input>
        <input
          type="color"
          value={props.color2}
          onChange={color2Handler}
        ></input>
      </div>
      <div className={classes.labels}>
        <label className={classes.colorcode}>
          {props.color1.toUpperCase()}
        </label>
        <label className={classes.colorcode}>
          {props.color2.toUpperCase()}
        </label>
      </div>
      <div>
        <label className = {classes.angle_label}>Angle</label>
        <input
          className={classes.angle}
          type="text"
          value={`${props.angle}`}
          onChange={angleHandler}
        ></input>
      </div>
      <div>
        <svg
          className={classes.section}
          onClick={showGradientHandler}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z" />
        </svg>

        <svg
          className={classes.section}
          onClick={showCodeHandler}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
        </svg>
        <a href="https://github.com/oxygen3301" target= "_blank" rel="noopener noreferrer">
        <svg
          className={classes.section}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="48"
          viewBox="0 0 24 24"
        >
          <use xlinkHref="http://github.com/"/>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        </a>
      </div>
      <p>Made with 👾 by Rohit.</p>
    </div>
  );
};

export default InputCard;
