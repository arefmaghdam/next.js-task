import { createSlice } from "@reduxjs/toolkit";

export interface users {
  value: [];
}

const currentUsersInitialState: users = {
  value: [],
};

const currentUsersSlice = createSlice({
  name: "currentUsers",
  initialState: currentUsersInitialState,
  reducers: {
    setCurrentUsers(state, action) {
      console.log(action.payload);
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { setCurrentUsers } = currentUsersSlice.actions;
export default currentUsersSlice.reducer;
