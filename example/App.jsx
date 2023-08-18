import React from "react";
import ReactDOM from "react-dom";
// App为库的入口，模拟外部引入
import App from "../src/index";

ReactDOM.render(
  <React.StrictMode>
    <App name="hello word" />
  </React.StrictMode>,
  document.getElementById("root")
);
