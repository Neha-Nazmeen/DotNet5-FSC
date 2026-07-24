import React from "react";

const flights = [
  { id: 1, from: "Bengaluru", to: "Delhi", price: 4500 },
  { id: 2, from: "Mumbai", to: "Chennai", price: 3800 },
  { id: 3, from: "Hyderabad", to: "Kolkata", price: 5200 }
];

function UserPage() {
  return (
    <div>
      <h2>Book Your Flight</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.from} to {flight.to} - Rs. {flight.price}{" "}
            <button>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
