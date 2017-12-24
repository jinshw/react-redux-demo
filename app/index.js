// var react = require("react")
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Root from "./root.js";


ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./root.js", () => {
    const NewRoot = require("./root.js").default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
