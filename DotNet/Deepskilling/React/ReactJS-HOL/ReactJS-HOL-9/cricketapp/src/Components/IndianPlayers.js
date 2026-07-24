import React from "react";

const oddTeam = ["Rohit Sharma", "KL Rahul", "Ravindra Jadeja", "Mohammed Shami", "Suryakumar Yadav"];
const evenTeam = ["Virat Kohli", "Hardik Pandya", "Jasprit Bumrah", "Shubman Gill", "Rishabh Pant", "Axar Patel"];

const T20players = ["Rohit Sharma", "Virat Kohli", "Hardik Pandya"];
const RanjiTrophyPlayers = ["Shubman Gill", "Rishabh Pant", "Axar Patel"];

function IndianPlayers() {
  // Destructuring
  const [firstOdd, secondOdd, ...restOdd] = oddTeam;
  const [firstEven, secondEven, ...restEven] = evenTeam;

  // Merge feature of ES6 (spread operator)
  const allSquadPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <p>
        First: {firstOdd}, Second: {secondOdd}, Rest: {restOdd.join(", ")}
      </p>

      <h2>Even Team Players</h2>
      <p>
        First: {firstEven}, Second: {secondEven}, Rest: {restEven.join(", ")}
      </p>

      <h2>T20 + Ranji Trophy Players (Merged)</h2>
      <ul>
        {allSquadPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
