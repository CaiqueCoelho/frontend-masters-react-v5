import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Seni",
      animal: "dog",
      breed: "Pastor Alemão",
    }),
    React.createElement(Pet, { name: "Kuduro", animal: "Cat", breed: "Mixed" }),
    React.createElement(Pet, { name: "Nemo", animal: "fish", breed: "Beta" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
