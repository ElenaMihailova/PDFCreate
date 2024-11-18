import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const ResponsibilityForm: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Ответственность за данные
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Фамилия сотрудника медицинской организации/ИП"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Имя сотрудника медицинской организации/ИП"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Отчество сотрудника медицинской организации/ИП (если есть)"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField label="Подпись" variant="outlined" fullWidth />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Дата заполнения"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default ResponsibilityForm;
