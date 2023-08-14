import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root") as Element | null;
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}


reportWebVitals();