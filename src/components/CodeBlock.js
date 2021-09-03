import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import classes from './CodeBlock.module.css';

const CodeBlock = (props) => {
  return (
    <div className = {`${!props.showCode && classes.hide} ${classes.code}`}>
      <CopyBlock
        theme={dracula}
        text={props.text}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        wrapLines={props.wrapLines}
        codeBlock
      />
    </div>
  );
};

export default CodeBlock;
