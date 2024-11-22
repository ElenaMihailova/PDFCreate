import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaxpayerState {
  lastName: string;
  firstName: string;
  middleName: string;
  taxpayerId: string;
  birthDate: string;
  documentCode?: string;
  documentNumber: string;
  documentIssueDate: string;
}

const initialState: TaxpayerState = {
  lastName: "",
  firstName: "",
  middleName: "",
  taxpayerId: "",
  birthDate: "",
  documentCode: "21",
  documentNumber: "",
  documentIssueDate: "",
};

const taxpayerSlice = createSlice({
  name: "taxpayer",
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
    setTaxpayerId(state, action: PayloadAction<string>) {
      state.taxpayerId = action.payload;
    },
    setBirthDate(state, action: PayloadAction<string>) {
      state.birthDate = action.payload;
    },
    setDocumentNumber(state, action: PayloadAction<string>) {
      state.documentNumber = action.payload;
    },
    setDocumentIssueDate(state, action: PayloadAction<string>) {
      state.documentIssueDate = action.payload;
    },
    resetForm(state) {
      state.lastName = "";
      state.firstName = "";
      state.middleName = "";
      state.taxpayerId = "";
      state.birthDate = "";
      state.documentNumber = "";
      state.documentIssueDate = "";
      state.documentCode = "21";
    },
    setTaxpayerData(state, action: PayloadAction<TaxpayerState>) {
      state.lastName = action.payload.lastName;
      state.firstName = action.payload.firstName;
      state.middleName = action.payload.middleName;
      state.taxpayerId = action.payload.taxpayerId;
      state.birthDate = action.payload.birthDate;
      state.documentCode = action.payload.documentCode;
      state.documentNumber = action.payload.documentNumber;
      state.documentIssueDate = action.payload.documentIssueDate;
    },
  },
});

export const {
  setLastName,
  setFirstName,
  setMiddleName,
  setTaxpayerId,
  setBirthDate,
  setDocumentNumber,
  setDocumentIssueDate,
  resetForm,
  setTaxpayerData,
} = taxpayerSlice.actions;

export const taxpayerReducer = taxpayerSlice.reducer;
