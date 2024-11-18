import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const OrganizationForm: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Данные медицинской организации
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="ИНН медицинской организации"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="КПП медицинской организации"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField label="Отчетный год" variant="outlined" fullWidth />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Hаименование организации"
          variant="outlined"
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default OrganizationForm;
