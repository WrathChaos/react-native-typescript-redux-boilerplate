import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/**
 * ? Local Imports
 */
import { IUser } from "@services/models";

export interface InitialState {
  userData: IUser | null;
}

const initialState: InitialState = {
  userData: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IUser>) {
      state.userData = null;
      state.userData = action.payload;
    },
    resetUserData(state) {
      state.userData = null;
    },
  },
});

export const { setUserData, resetUserData } = userReducer.actions;

export default userReducer.reducer;
