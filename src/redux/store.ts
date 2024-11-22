import { configureStore } from "@reduxjs/toolkit";
import { companyReducer } from "./slices/companySlice";
import { reportReducer } from "./slices/reportSlice";
import { responsibilityReducer } from "./slices/responsibilitySlice";
import { taxpayerReducer } from "./slices/taxpayerSlice";
import { patientReducer } from "./slices/patientSlice";

export const store = configureStore({
  reducer: {
    company: companyReducer,
    report: reportReducer,
    responsibility: responsibilityReducer,
    taxpayer: taxpayerReducer,
    patient: patientReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
