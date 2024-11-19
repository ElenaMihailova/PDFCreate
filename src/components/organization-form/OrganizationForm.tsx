import React from "react";
import { Box, TextField, Typography } from "@mui/material";

interface OrganizationFormProps {
  organizationData: {
    inn: string;
    kpp: string;
    shortName: string;
  };
}

const organizationForm: React.FC<OrganizationFormProps> = ({
  organizationData,
}) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Данные медицинской организации
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="ИНН медицинской организации/ИП"
          variant="outlined"
          fullWidth
          value={organizationData.inn}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="КПП медицинской организации"
          variant="outlined"
          fullWidth
          value={organizationData.kpp}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Сокращенное наименование (или полное)"
          variant="outlined"
          fullWidth
          value={organizationData.shortName}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default organizationForm;
