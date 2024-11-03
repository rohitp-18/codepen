import { useContext, useEffect } from "react";
import context from "../../context/context";

function Output() {
  const { html5, js, css3 } = useContext(context);
  let src = `<head><style>${css3}</style></head><body>${html5}<script>${js}</script></body>`;
  useEffect(() => {
    src = `<head><style>${css3}</style></head><body>${html5}<script>${js}</script></body>`;
  }, [html5, css3, js]);
  return (
    <>
      <iframe title="my job" srcDoc={src}></iframe>
    </>
  );
}

export default Output;
