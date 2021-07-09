import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Cards";
import Sdata from "./Sdata";
function ncard(val) {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      mname={val.mname}
      link={val.link}
    />
  );
}
ReactDOM.render(
  <>
    <h1 className="heading_style"> List of Marvel Movies</h1>
    {Sdata.map(ncard)};
  </>,
  document.getElementById("root")
);
