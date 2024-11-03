import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fullscreen, FullscreenExit, Close } from "@mui/icons-material";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

const Code = (props) => {
  const [show, setShow] = useState("flex");

  useEffect(() => {
    if (props.button.includes(props.lang)) {
      setShow("none");
    } else {
      setShow("flex");
    }
  }, [props.button, show]);

  return (
    <section
      style={{ display: show }}
      className={`editor ${props.screen && "full-width"}`}
    >
      <div className="all-editor">
        <div className="first">
          <FontAwesomeIcon
            style={{ color: props.color, backgroundColor: "transparent" }}
            icon={props.logo}
          />
          <span>{props.lang === "js" ? "javascript" : props.lang}</span>
        </div>
        <div className="second">
          {props.screen !== props.lang ? (
            <Fullscreen
              onClick={() => props.setScreen(props.lang)}
              className="icons"
            />
          ) : (
            <FullscreenExit
              onClick={() => props.setScreen("none")}
              className="icons"
            />
          )}
          <Close
            onClick={() => props.setButton(props.lang)}
            className="icons"
          />
        </div>
      </div>
      <div onClick={() => props.setScreen(props.lang)} className="codemirror">
        <CodeMirror
          className="codemirror-input"
          value={props.value}
          theme={vscodeDark}
          extensions={[props.mode({ jsx: true })]}
          onChange={(e) => props.onChange(e)}
        />
      </div>
    </section>
  );
};

export default Code;
// ${/*props.lang === props.screen && props.screen*/}
