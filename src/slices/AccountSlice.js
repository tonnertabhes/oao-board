import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeb3ReactContext, useWeb3React } from "@web3-react/core";
import { ADDRESSES } from "../constants/addresses";
import { abi as BoardABI } from "../constants/BoardABI.js";
import { ethers } from "ethers";

export const getAccountInfo = createAsyncThunk(
  "user/getAccountInfo",
  async ({ wallet, library }) => {
    const provider = await library;
    const boardContract = new ethers.Contract(
      ADDRESSES.BOARDADDRESS,
      BoardABI,
      provider
    );
    const boardMember = await boardContract._balances(wallet);

    return {
      wallet: wallet,
      board: parseInt(boardMember),
    };
  }
);

const accountSlice = createSlice({
  name: "user",
  initialState: {
    address: 0,
    board: 0,
  },
  extraReducers: {
    [getAccountInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAccountInfo.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.address = payload.wallet;
      state.board = payload.board;
    },
    [getAccountInfo.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default accountSlice.reducer;
