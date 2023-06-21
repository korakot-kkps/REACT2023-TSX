import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";
import authReducer from "../features/auth/authSlice";
import { membershipApi } from "./services/membership";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,

    [membershipApi.reducerPath]: membershipApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
