import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FinancialInfoState {
  serviceCode1Expense: number;
  serviceCode2Expense: number;
}

const initialState: FinancialInfoState = {
  serviceCode1Expense: 0,
  serviceCode2Expense: 0,
};

const financialInfoSlice = createSlice({
  name: "financialInfo",
  initialState,
  reducers: {
    setServiceCode1Expense(state, action: PayloadAction<number>) {
      state.serviceCode1Expense = action.payload;
    },
    setServiceCode2Expense(state, action: PayloadAction<number>) {
      state.serviceCode2Expense = action.payload;
    },
    setFinancialInfo(state, action: PayloadAction<FinancialInfoState>) {
      state.serviceCode1Expense = action.payload.serviceCode1Expense;
      state.serviceCode2Expense = action.payload.serviceCode2Expense;
    },
    resetFinancialInfo(state) {
      state.serviceCode1Expense = 0;
      state.serviceCode2Expense = 0;
    },
  },
});

export const {
  setServiceCode1Expense,
  setServiceCode2Expense,
  setFinancialInfo,
  resetFinancialInfo,
} = financialInfoSlice.actions;

export const financialInfoReducer = financialInfoSlice.reducer;

