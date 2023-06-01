import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExtractionProvider } from "./contexts/extraction";
import { StudentDataProvider } from "./contexts/studentData";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExtractionProvider>
      <StudentDataProvider>
        <App />
      </StudentDataProvider>
    </ExtractionProvider>
  </React.StrictMode>
);
