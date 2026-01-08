import "./tailwind.css";
import "./index.scss";
import App from "@/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { theme } from "@/utils/constants";
import { ThemeProvider } from "styled-components";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
