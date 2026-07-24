import React from "react";
import "./App.css";
import EventDemo from "./Components/EventDemo";
import CurrencyConvertor from "./Components/CurrencyConvertor";

function App() {
  return (
    <div className="App">
      <h1>Event Examples App</h1>
      <EventDemo />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
