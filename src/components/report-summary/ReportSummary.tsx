import React from "react";
import { Box, Typography } from "@mui/material";

interface ReportSummaryProps {
  data: {
    clinicName: string;
    INN: string;
    KPP: string;
  };
}

export const ReportSummary: React.FC<ReportSummaryProps> = ({ data }) => {
  const fields = [
    { label: "Название клиники", value: data.clinicName },
    { label: "ИНН", value: data.INN },
    { label: "КПП", value: data.KPP },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Данные для формирования справки
      </Typography>
      <Box>
        {fields.map((field, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography variant="body1">
              <strong>{field.label}:</strong>
            </Typography>
            <Typography variant="body1">{field.value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
