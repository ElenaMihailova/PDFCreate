import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PatientData {
  name: string;
  age: number;
  diagnosis: string;
  [key: string]: any; // Для дополнительных данных
}

interface PatientState {
  data: PatientData | null;
}

const initialState: PatientState = {
  data: null, // Начальное состояние — нет данных
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setPatientData: (state, action: PayloadAction<PatientData>) => {
      state.data = action.payload; // Сохраняем данные пациента
    },
    clearPatientData: (state) => {
      state.data = null; // Очищаем данные пациента
    },
  },
});

export const { setPatientData, clearPatientData } = patientSlice.actions;
export const patientReducer = patientSlice.reducer;
