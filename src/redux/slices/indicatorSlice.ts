import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IndicatorState {
  value: string;
}

const initialState: IndicatorState = {
  value: "1",
};

const indicatorSlice = createSlice({
  name: "indicator",
  initialState,
  reducers: {
    setIndicatorValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setIndicatorValue } = indicatorSlice.actions;

export const indicatorReducer = indicatorSlice.reducer;
