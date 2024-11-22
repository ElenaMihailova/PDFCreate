import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PatientState {
  lastName: string;
  firstName: string;
  middleName: string;
  patientId?: string;
  birthDate: string;
  documentCode: string;
  documentNumber: string;
  documentIssueDate: string;
}

const initialState: PatientState = {
  lastName: "",
  firstName: "",
  middleName: "",
  patientId: "",
  birthDate: "",
  documentCode: "21",
  documentNumber: "",
  documentIssueDate: "",
};

const patientSlice = createSlice({
  name: "patient",
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
      state.patientId = action.payload;
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
      state.patientId = "";
      state.birthDate = "";
      state.documentNumber = "";
      state.documentIssueDate = "";
      state.documentCode = "21";
    },
    setPatientData(state, action: PayloadAction<PatientState>) {
      state.lastName = action.payload.lastName;
      state.firstName = action.payload.firstName;
      state.middleName = action.payload.middleName;
      state.patientId = action.payload.patientId;
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
  setPatientData,
} = patientSlice.actions;

export const patientReducer = patientSlice.reducer;
