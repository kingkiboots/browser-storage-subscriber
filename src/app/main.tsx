import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { MainPage } from "../pages/main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
