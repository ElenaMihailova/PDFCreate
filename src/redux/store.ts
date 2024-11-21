import { configureStore } from "@reduxjs/toolkit";
import { companyReducer } from "./slices/companySlice";


export const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
