import { configureStore } from "@reduxjs/toolkit";
import { companyReducer } from "./slices/companySlice";
import { reportReducer } from "./slices/reportSlice";
import { responsibilityReducer } from "./slices/responsibilitySlice";
import { taxpayerReducer } from "./slices/taxpayerSlice";
import { patientReducer } from "./slices/patientSlice";
import { financialInfoReducer } from "./slices/financialInfoSlice";

export const store = configureStore({
  reducer: {
    company: companyReducer,
    report: reportReducer,
    responsibility: responsibilityReducer,
    taxpayer: taxpayerReducer,
    patient: patientReducer,
    financial: financialInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
