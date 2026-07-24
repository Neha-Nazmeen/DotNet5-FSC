import React from "react";
import "./App.css";

const officeImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400";

const office = {
  name: "Skyline Business Suite",
  rent: 55000,
  address: "12th Floor, Tech Park, Bengaluru"
};

const officeList = [
  { id: 1, name: "Skyline Business Suite", rent: 55000, address: "12th Floor, Tech Park, Bengaluru" },
  { id: 2, name: "Riverside Corporate Hub", rent: 72000, address: "3rd Floor, Riverside Complex, Pune" },
  { id: 3, name: "Green Valley Coworking", rent: 48000, address: "Ground Floor, Green Valley, Hyderabad" },
  { id: 4, name: "Metro Executive Center", rent: 90000, address: "5th Floor, Metro Towers, Chennai" }
];

function App() {
  // Element to display heading
  const heading = <h1>Office Space Rental</h1>;

  // Attribute to display the image of the office space
  const officeImg = <img src={officeImage} alt="office space" width="300" />;

  return (
    <div className="App">
      {heading}
      {officeImg}

      <h2>Featured Office</h2>
      <p>Name: {office.name}</p>
      <p>Address: {office.address}</p>
      <p style={{ color: office.rent < 60000 ? "red" : "green", fontWeight: "bold" }}>
        Rent: Rs. {office.rent}
      </p>

      <h2>Available Offices</h2>
      <ul className="office-list">
        {officeList.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.address} -{" "}
            <span style={{ color: item.rent < 60000 ? "red" : "green" }}>
              Rs. {item.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
