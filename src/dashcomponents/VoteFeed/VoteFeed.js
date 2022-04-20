import { useWeb3React } from "@web3-react/core";
import React, { useEffect } from "react";
import "./VoteFeed.css";
import { useDispatch, useSelector } from "react-redux";
import { getBoardInfo } from "../../slices/BoardSlice";

export default function VoteFeed() {
  const { library, account } = useWeb3React();
  const dispatch = useDispatch();

  const votes = useSelector((state) => state.board.votes);

  useEffect(() => {
    dispatch(getBoardInfo({ library: library }));
  }, []);

  useEffect(() => {
    console.log(votes);
  }, [votes]);

  return (
    <div>
      <h1>Ongoing Votes:</h1>
      <div className="vote-feed">
        <h3>Vote Action: {votes.voteType}</h3>
        <h3>Vote Owner: {votes.owner}</h3>
        <button>Cast Vote</button>
      </div>
    </div>
  );
}
