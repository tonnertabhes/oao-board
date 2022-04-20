import React, { useEffect, useState } from "react";
import { MetaMaskConnect } from "./helpers/connectors";
import { useWeb3React } from "@web3-react/core";
import { useDispatch, useSelector } from "react-redux";
import { getAccountInfo } from "./slices/AccountSlice";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const { activate, account, library } = useWeb3React();
  const [boardStatus, setBoardStatus] = useState(false);
  const dispatch = useDispatch();

  const address = useSelector((state) => state.account.address);
  const board = useSelector((state) => state.account.board);

  useEffect(() => {
    dispatch(getAccountInfo({ wallet: account, library }));
  }, [account]);

  useEffect(() => {}, [address, board]);

  const connect = async () => {
    await activate(MetaMaskConnect);
  };

  return (
    <div className="App">
      <nav>
        <button onClick={connect}>Connect Wallet</button>
        <h1>Connected with: {address}</h1>
      </nav>
      {board === 1 ? <Dashboard /> : <h1>You are not a board member.</h1>}
    </div>
  );
}

export default App;
