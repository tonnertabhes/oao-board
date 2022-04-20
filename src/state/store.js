import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../slices/AccountSlice";
import boardReducer from "../slices/BoardSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    board: boardReducer,
  },
});
