import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyState {
  clinicId: string | null;
}

const initialState: CompanyState = {
  clinicId: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setClinicId: (state, action: PayloadAction<string>) => {
      state.clinicId = action.payload;
    },
    clearClinicId: (state) => {
      state.clinicId = null;
    },
  },
});

export const { setClinicId, clearClinicId } = companySlice.actions;
export const companyReducer = companySlice.reducer;
