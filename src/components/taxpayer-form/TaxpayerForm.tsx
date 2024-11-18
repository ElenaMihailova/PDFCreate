import React from "react";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
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
      <Box sx={{ marginBottom: 2 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Признак: Налогоплательщик и пациент являются одним лицом
          </FormLabel>
          <RadioGroup row>
            <FormControlLabel value="1" control={<Radio />} label="Да" />
            <FormControlLabel value="0" control={<Radio />} label="Нет" />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default TaxpayerForm;
