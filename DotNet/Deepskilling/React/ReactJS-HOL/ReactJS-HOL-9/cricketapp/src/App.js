import React from "react";
import "./App.css";
import ListofPlayers from "./Components/ListofPlayers";
import IndianPlayers from "./Components/IndianPlayers";

const flag = true;

function App() {
  return (
    <div className="App">
      <h1>Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
