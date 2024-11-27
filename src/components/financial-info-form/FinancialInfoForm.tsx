import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setServiceCode1Expense,
  setServiceCode2Expense,
} from "../../redux/slices/financialInfoSlice";

const FinancialInfoForm: React.FC = () => {
  const dispatch = useDispatch();
  const { serviceCode1Expense, serviceCode2Expense } = useSelector(
    (state: RootState) => state.financial
  );

  const handleServiceCode1Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value === "" ? 0 : Number(event.target.value);
    dispatch(setServiceCode1Expense(value));
  };

  const handleServiceCode2Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value === "" ? 0 : Number(event.target.value);
    dispatch(setServiceCode2Expense(value));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Финансовая информация
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Сумма расходов на медицинские услуги (код услуги «1»)"
          type="number"
          variant="outlined"
          fullWidth
          value={serviceCode1Expense === 0 ? "" : serviceCode1Expense}
          onChange={handleServiceCode1Change}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Сумма расходов на медицинские услуги (код услуги «2»)"
          type="number"
          variant="outlined"
          fullWidth
          value={serviceCode2Expense === 0 ? "" : serviceCode2Expense}
          onChange={handleServiceCode2Change}
        />
      </Box>
    </Box>
  );
};

export default FinancialInfoForm;
