import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

interface AuthState {
  user: User | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
};

// Create user slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload; // Store user data in Redux
    },
    logout: (state) => {
      state.user = null; // Clear user on logout
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
