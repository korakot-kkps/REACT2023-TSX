import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../app/services/auth";
import type { RootState } from "../../app/store";

type UserState = {
  login: string | null;
  id: number;
};

const slice = createSlice({
  name: "user",
  initialState: { login: null, id: 0 } as UserState,
  reducers: {
    getUser: (state, { payload: { login } }: PayloadAction<{ login:string }>) => {
      state.login = login;
      state.id = 0;
    },
  },
});

export const { getUser } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
