import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";
import Password from "./js/PasswordToggle";

const root = document.getElementById("root");
if (root) {
  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(<App />);
}
const password = document.getElementById("password");
if (password) {
  const reactRoot = ReactDOM.createRoot(password);
  reactRoot.render(<Password />);
}
