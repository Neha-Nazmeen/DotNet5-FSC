import React from "react";

const flights = [
  { id: 1, from: "Bengaluru", to: "Delhi", price: 4500 },
  { id: 2, from: "Mumbai", to: "Chennai", price: 3800 },
  { id: 3, from: "Hyderabad", to: "Kolkata", price: 5200 }
];

function GuestPage() {
  return (
    <div>
      <h2>Available Flights</h2>
      <p>Login to book tickets.</p>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.from} to {flight.to} - Rs. {flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestPage;
