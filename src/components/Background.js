import React from "react";
import styles from "./Background.module.css";

const Background = (props) => {
  const gradientChangeHandler = () => {
    props.onShowGradient(false);
  };
  return (
    <div
      onClick={props.showGradient ? gradientChangeHandler : undefined}
      style={{
        background: `linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})`,
      }}
      className={styles.bg}
    >
      {props.children}
    </div>
  );
};

export default Background;
