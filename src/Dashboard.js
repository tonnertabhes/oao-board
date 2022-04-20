import React from "react";
import SeatTransfer from "./dashcomponents/SeatTransfer/SeatTransfer";
import Vote from "./dashcomponents/Vote/Vote";
import VoteFeed from "./dashcomponents/VoteFeed/VoteFeed";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Vote />
      <VoteFeed />
      <SeatTransfer />
    </div>
  );
}
