import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import { ADDRESSES } from "../constants/addresses";
import { abi as BoardABI } from "../constants/BoardABI";

export const getBoardInfo = createAsyncThunk(
  "board/getBoardInfo",
  async ({ library }) => {
    const provider = await library;
    const boardContract = new ethers.Contract(
      ADDRESSES.BOARDADDRESS,
      BoardABI,
      provider
    );
    const votes = await boardContract.votes(0);

    let result = {
      voteType: votes[0],
      ID: parseInt(votes[1]),
      owner: votes[2],
      isOpen: votes[3],
    };

    return { result };
  }
);

const boardSlice = createSlice({
  name: "board",
  initialState: {
    status: "none",
  },
  extraReducers: {
    [getBoardInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [getBoardInfo.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.votes = payload.result;
    },
    [getBoardInfo.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default boardSlice.reducer;
