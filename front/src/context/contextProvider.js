import Context from "./context";
import { useState } from "react";

const Container = (props) => {
  const [html5, setHtml] = useState("");
  const [css3, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <Context.Provider value={{ html5, setHtml, css3, setCss, js, setJs }}>
      {props.children}
    </Context.Provider>
  );
};

export default Container;
