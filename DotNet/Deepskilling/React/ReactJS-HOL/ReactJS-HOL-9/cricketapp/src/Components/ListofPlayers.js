import React from "react";

const players = [
  { name: "Rohit Sharma", score: 85 },
  { name: "Virat Kohli", score: 92 },
  { name: "KL Rahul", score: 65 },
  { name: "Hardik Pandya", score: 58 },
  { name: "Ravindra Jadeja", score: 45 },
  { name: "Jasprit Bumrah", score: 12 },
  { name: "Shubman Gill", score: 78 },
  { name: "Rishabh Pant", score: 60 },
  { name: "Mohammed Shami", score: 8 },
  { name: "Axar Patel", score: 40 },
  { name: "Suryakumar Yadav", score: 71 }
];

function ListofPlayers() {
  // map() -> transform each player into a display line
  const playerList = players.map((player, index) => (
    <li key={index}>
      {player.name} - {player.score} runs
    </li>
  ));

  // arrow function + filter() -> players scoring below 70
  const lowScorers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players (11)</h2>
      <ul>{playerList}</ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score} runs
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
