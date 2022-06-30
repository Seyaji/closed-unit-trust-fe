import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './lib/App';

const rootElement = document.getElementById("root");


createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);