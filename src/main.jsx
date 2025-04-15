import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./design/css/index.css";
import App from "./pages/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
