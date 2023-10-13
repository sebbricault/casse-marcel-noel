import React from "react";
import { createRoot } from "react-dom/client";
import App from "./js/App";
import Password from "./js/PasswordToggle";
import HomePage from "./js/HomePage";
import VehiculePage from "./js/VehiculesPage";
import PiecesPage from "./js/PiecesPage";
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
const vehicule = document.getElementById("vehicules");
if (vehicule) {
  const reactRoot = createRoot(vehicule);
  reactRoot.render(<VehiculePage />);
}
const piece = document.getElementById("pieces");
if (piece) {
  const reactRoot = createRoot(piece);
  reactRoot.render(<PiecesPage />);
}
