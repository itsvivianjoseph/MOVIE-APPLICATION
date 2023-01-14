import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
//Here is your key: 7cfe3aad
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
