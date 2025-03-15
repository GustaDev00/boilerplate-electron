/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

// Inicializa a aplicação React
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

console.log("👋 React application is now running in the renderer process");
