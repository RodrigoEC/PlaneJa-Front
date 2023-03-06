import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExtractionProvider } from "./contexts/extraction";
import { RestraintsProvider } from "./contexts/restraints";
import { StudentDataProvider } from "./contexts/studentData";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExtractionProvider>
      <StudentDataProvider>
        <RestraintsProvider>
          <App />
        </RestraintsProvider>
      </StudentDataProvider>
    </ExtractionProvider>
  </React.StrictMode>
);
