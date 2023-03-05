import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecordExtractionProvider } from "./contexts/recordExtraction";
import { RestraintsProvider } from "./contexts/restraints";
import { SubjectsTableProvider } from "./contexts/weeklySchedule";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecordExtractionProvider>
      <RestraintsProvider>
        <SubjectsTableProvider>
            <App />
        </SubjectsTableProvider>
      </RestraintsProvider>
    </RecordExtractionProvider>
  </React.StrictMode>
);
