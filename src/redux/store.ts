import { configureStore } from "@reduxjs/toolkit";
import currentUsersReducer from "./slices/currentUsersSlice";

const store = configureStore({
  reducer: {
    currentUsers: currentUsersReducer,
  },
});

export default store;
