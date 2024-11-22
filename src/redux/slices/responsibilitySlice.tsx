import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResponsibilityState {
  lastName: string;
  firstName: string;
  middleName: string;
  date: string;
}

const initialState: ResponsibilityState = {
  lastName: "",
  firstName: "",
  middleName: "",
  date: new Date().toISOString().split("T")[0],
};

const responsibilitySlice = createSlice({
  name: "responsibility",
  initialState,
  reducers: {
    setLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    setFirstName(state, action: PayloadAction<string>) {
      state.firstName = action.payload;
    },
    setMiddleName(state, action: PayloadAction<string>) {
      state.middleName = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    resetForm(state) {
      state.lastName = "";
      state.firstName = "";
      state.middleName = "";
      state.date = new Date().toISOString().split("T")[0];
    },
  },
});

export const { setLastName, setFirstName, setMiddleName, setDate, resetForm } =
  responsibilitySlice.actions;

export const responsibilityReducer = responsibilitySlice.reducer;
