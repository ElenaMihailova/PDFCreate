import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setLastName,
  setFirstName,
  setMiddleName,
  setDate,
} from "../../redux/slices/responsibilitySlice"
import { RootState } from "../../redux/store";

const ResponsibilityForm: React.FC = () => {
  const dispatch = useDispatch();
  const responsibility = useSelector((state: RootState) => state.responsibility);

  const handleInputChange = (
    field: string,
    value: string
  ) => {
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
      case "fillingDate":
        dispatch(setDate(value));
        break;
      default:
        break;
    }
  };

  const getCurrentDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Ответственность за данные
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Фамилия сотрудника медицинской организации"
          variant="outlined"
          fullWidth
          value={responsibility.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Имя сотрудника медицинской организации"
          variant="outlined"
          fullWidth
          value={responsibility.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Отчество сотрудника медицинской организации"
          variant="outlined"
          fullWidth
          value={responsibility.middleName}
          onChange={(e) => handleInputChange("middleName", e.target.value)}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Дата заполнения"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          fullWidth
          value={responsibility.date}
          defaultValue={getCurrentDate()}
          onChange={(e) => handleInputChange("fillingDate", e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default ResponsibilityForm;
