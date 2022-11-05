import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExtractionProvider } from "./contexts/extraction";
import { RestraintsProvider } from "./contexts/restraints";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExtractionProvider>
      <RestraintsProvider>
        <App />
      </RestraintsProvider>
    </ExtractionProvider>
  </React.StrictMode>
);
