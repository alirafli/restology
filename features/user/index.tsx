import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "username", age: 0, email: "email@example.com" };

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialState,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
