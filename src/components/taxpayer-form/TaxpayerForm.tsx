import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setLastName,
  setFirstName,
  setMiddleName,
  setTaxpayerId,
  setBirthDate,
  setDocumentNumber,
  setDocumentIssueDate,
} from "../../redux/slices/taxpayerSlice";
import { RootState } from "../../redux/store";

const TaxpayerForm: React.FC = () => {
  const dispatch = useDispatch();
  const taxpayer = useSelector((state: RootState) => state.taxpayer);

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case "lastName":
        dispatch(setLastName(value));
        break;
      case "firstName":
        dispatch(setFirstName(value));
        break;
      case "middleName":
        dispatch(setMiddleName(value));
        break;
      case "taxpayerId":
        dispatch(setTaxpayerId(value));
        break;
      case "birthDate":
        dispatch(setBirthDate(value));
        break;
      case "documentNumber":
        dispatch(setDocumentNumber(value));
        break;
      case "documentIssueDate":
        dispatch(setDocumentIssueDate(value));
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Данные налогоплательщика
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Фамилия"
          variant="outlined"
          fullWidth
          value={taxpayer.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Имя"
          variant="outlined"
          fullWidth
          value={taxpayer.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Отчество"
          variant="outlined"
          fullWidth
          value={taxpayer.middleName}
          onChange={(e) => handleInputChange("middleName", e.target.value)}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="ИНН налогоплательщика (если есть)"
          variant="outlined"
          fullWidth
          value={taxpayer.taxpayerId}
          onChange={(e) => handleInputChange("taxpayerId", e.target.value)}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Дата рождения"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
          value={taxpayer.birthDate}
          onChange={(e) => handleInputChange("birthDate", e.target.value)}
        />
      </Box>

      <Box sx={{ marginBottom: 2, textAlign: "left" }}>
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
          value={taxpayer.documentNumber}
          onChange={(e) => handleInputChange("documentNumber", e.target.value)}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Дата выдачи документа"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
          value={taxpayer.documentIssueDate}
          onChange={(e) =>
            handleInputChange("documentIssueDate", e.target.value)
          }
        />
      </Box>
    </Box>
  );
};

export default TaxpayerForm;
