import React from "react";
import "./App.css";
import CohortDetails from "./Components/CohortDetails";

const cohorts = [
  { id: 1, name: "ReactJS Batch 21", startDate: "01-Jun-2026", endDate: "30-Jun-2026", status: "ongoing" },
  { id: 2, name: "Java Batch 14", startDate: "01-Apr-2026", endDate: "30-Apr-2026", status: "completed" },
  { id: 3, name: "Python Batch 9", startDate: "10-Jun-2026", endDate: "10-Jul-2026", status: "ongoing" }
];

function App() {
  return (
    <div className="App">
      <h1>Cognizant Academy - Cohort Dashboard</h1>
      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.id} {...cohort} />
      ))}
    </div>
  );
}

export default App;
