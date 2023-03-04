import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StudentRecordProvider } from "./contexts/studentRecord";
import { RestraintsProvider } from "./contexts/restraints";
import { SubjectsTableProvider } from "./contexts/weeklySchedule";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StudentRecordProvider>
      <RestraintsProvider>
        <SubjectsTableProvider>
          <App />
        </SubjectsTableProvider>
      </RestraintsProvider>
    </StudentRecordProvider>
  </React.StrictMode>
);
