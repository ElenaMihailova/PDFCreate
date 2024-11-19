import React from "react";
import {
  Box,
  TextField,
  Typography,
} from "@mui/material";

const TaxpayerForm: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Данные налогоплательщика
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
          label="ИНН налогоплательщика (если есть)"
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

      <Box sx={{ marginBottom: 2, textAlign: 'left' }}>
        <Typography variant="body1">
          <strong>Код вида документа:</strong> 21 Паспорт гражданина Российской
          Федерации
        </Typography>
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

export default TaxpayerForm;
