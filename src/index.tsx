import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExtractionProvider } from "./contexts/extraction";
import { RestraintsProvider } from "./contexts/restraints";
import { SubjectsTableProvider } from "./contexts/subjectsTable";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExtractionProvider>
      <RestraintsProvider>
        <SubjectsTableProvider>
          <App />
        </SubjectsTableProvider>
      </RestraintsProvider>
    </ExtractionProvider>
  </React.StrictMode>
);
