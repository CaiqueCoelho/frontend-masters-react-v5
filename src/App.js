const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
