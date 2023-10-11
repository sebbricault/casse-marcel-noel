import React from "react";
import { createRoot } from "react-dom/client";
import App from "./js/App";
import Password from "./js/PasswordToggle";
import HomePage from "./js/HomePage";
const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
}
const password = document.getElementById("password");
if (password) {
  const reactRoot = createRoot(password);
  reactRoot.render(<Password />);
}
const home = document.getElementById("react-root");
if (home) {
  const reactRoot = createRoot(home);
  reactRoot.render(<HomePage />);
}
