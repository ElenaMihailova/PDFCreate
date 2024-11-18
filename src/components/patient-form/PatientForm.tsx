import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const PatientForm: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Данные пациента (если применимо)
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField label="Фамилия" variant="outlined" fullWidth />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField label="Имя" variant="outlined" fullWidth />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField label="Отчество" variant="outlined" fullWidth />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="ИНН пациента (если есть)"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Дата рождения"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField label="Код вида документа" variant="outlined" fullWidth />
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Серия и номер документа"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Дата выдачи документа"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default PatientForm;
