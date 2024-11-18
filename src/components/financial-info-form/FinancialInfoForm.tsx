import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const FinancialInfoForm: React.FC = () => {
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
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Сумма расходов на медицинские услуги (код услуги «2»)"
          type="number"
          variant="outlined"
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default FinancialInfoForm;
