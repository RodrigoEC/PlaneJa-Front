import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecordExtractionProvider } from "./contexts/recordExtraction";
import { RestraintsProvider } from "./contexts/restraints";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecordExtractionProvider>
      <RestraintsProvider>
        <App />
      </RestraintsProvider>
    </RecordExtractionProvider>
  </React.StrictMode>
);
