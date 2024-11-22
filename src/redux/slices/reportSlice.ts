import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReportState {
  year: number;
  reportNumber: string;
  reportCorNumber: string;
}

const currentYear = new Date().getFullYear();

const initialState: ReportState = {
  year: currentYear,
  reportNumber: "",
  reportCorNumber: "",
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setReportNumber: (state, action: PayloadAction<string>) => {
      state.reportNumber = action.payload;
    },
    setCorNumber: (state, action: PayloadAction<string>) => {
      state.reportCorNumber = action.payload;
    },
  },
});

export const { setYear, setReportNumber, setCorNumber } = reportSlice.actions;
export const reportReducer = reportSlice.reducer;
