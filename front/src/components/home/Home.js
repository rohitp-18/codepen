import React, { useContext, useEffect, useState } from "react";
import Code from "./code";
import "./home.css";
import context from "../../context/context";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";
import Output from "./output";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function Home() {
  const { html5, setHtml, css3, setCss, js, setJs } = useContext(context);
  const [screen, setScreen] = useState("html");
  const [button, setButton] = useState([]);
  const [value, setValue] = useState("html");
  let arr = ["html", "css", "js"];

  useEffect(() => {
    if (window.innerWidth < 650) {
      console.log(window.innerWidth);
      setButton(["css", "js"]);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    if (window.innerWidth < 650) {
      setButton(() => arr.filter((e) => value !== e));
    }
  }, [value]);
  return (
    <>
      <section className="mobile">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <FormControlLabel
            value="html"
            size="small"
            control={<Radio />}
            label="html"
          />
          <FormControlLabel
            value="css"
            size="small"
            control={<Radio />}
            label="css"
          />
          <FormControlLabel
            value="js"
            size="small"
            control={<Radio />}
            label="js"
          />
        </RadioGroup>
      </section>
      <section className="pc">
        {button.map((val) => (
          <FormControlLabel
            key={val}
            value={val}
            control={<Radio />}
            label={val}
            onClick={() => setButton(button.filter((e) => e !== val))}
          />
        ))}
      </section>
      <main className="home">
        <Code
          button={button}
          setButton={(e) => setButton([...button, e])}
          screen={screen}
          setScreen={setScreen}
          color="#e34c26"
          value={html5}
          onChange={(e) => setHtml(e)}
          lang="html"
          mode={html}
          logo={faHtml5}
        />
        <Code
          button={button}
          setButton={(e) => setButton([...button, e])}
          screen={screen}
          setScreen={setScreen}
          color="#264de4"
          value={css3}
          onChange={(e) => setCss(e)}
          lang="css"
          mode={css}
          logo={faCss3Alt}
        />
        <Code
          button={button}
          setButton={(e) => setButton([...button, e])}
          screen={screen}
          setScreen={setScreen}
          color="#f0db4f"
          value={js}
          onChange={(e) => setJs(e)}
          lang="js"
          mode={javascript}
          logo={faJs}
        />
      </main>
      <main className="output">
        <Output />
      </main>
    </>
  );
}

export default Home;
