import React, { useState } from "react";
import InputCard from "./components/InputCard";
import Background from "./components/Background";
import CodeBlock from "./components/CodeBlock";

function App() {
  const [color1, setColor1] = useState("#7DEAF2");
  const [color2, setColor2] = useState("#3DFFB5");
  const [angle, setAngle] = useState("90");
  const [showGradient, setShowGradient] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const code =`background: ${color1}; /*Fallback for old browsers */\nbackground: linear-gradient(${angle}deg, ${color1}, ${color2});`

  const angleChangeHandler = (angle) => {
    setAngle(angle);
  };
  const color1ChangeHandler = (color) => {
    setColor1(color);
  };

  const color2ChangeHandler = (color) => {
    setColor2(color);
  };
  const gradientChangeHandler = (boo) => {
    setShowGradient(boo);
  };
  const codeChangeHandler = (boo) => {
    setShowCode(boo);
  };

  return (
    <Background
      color1={color1}
      color2={color2}
      angle={angle}
      showGradient={showGradient}
      onShowGradient={gradientChangeHandler}
    >
      <InputCard
        color1={color1}
        color2={color2}
        angle={angle}
        showGradient={showGradient}
        onColor1Change={color1ChangeHandler}
        onColor2Change={color2ChangeHandler}
        onAngleChange={angleChangeHandler}
        onShowGradient={gradientChangeHandler}
        showCode={showCode}
        onShowCode={codeChangeHandler}
      />

      <CodeBlock
        language="css"
        text={code}
        showLineNumbers={true}
        wrapLines={true}
        codeBlock
        showCode={showCode}
      />
    </Background>
  );
}

export default App;
