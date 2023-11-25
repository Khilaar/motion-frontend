import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: undefined,
    details: null,
  },
  reducers: {
    //Set the accessToken in the state to the payload, which was dispatched in loginRoute
    login: (state, action) => {
      state.accessToken = action.payload;
    },
    //Set the user details and token to null inside of the state when user logs out
    logout: (state) => {
      state.accessToken = null;
      state.details = null;
    },
    //Set the user details in the state to the payload, which was dispatched in loginRoute
    loadUser: (state, action) => {
      state.details = action.payload;
      localStorage.setItem("userDetails", JSON.stringify(action.payload));
    },

    // updates the user details when the user edits their information in the form.
    updateUser: (state, action) => {
      state.details = {
        first_name: action.payload,
        last_name: action.payload,
      };
    },
  },
});

export const { login, logout, loadUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
