import React, { useState } from "react";
import "./App.css";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
