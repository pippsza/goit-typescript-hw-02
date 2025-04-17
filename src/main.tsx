import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/App.tsx";
import App from "./components/App.tsx";

createRoot(document.getElementById("root")! as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
