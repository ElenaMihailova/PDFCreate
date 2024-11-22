import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

interface YearBlockProps {
  currentYear: number;
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export const YearBlock: React.FC<YearBlockProps> = ({
  currentYear,
  selectedYear,
  onYearChange,
}) => {
  const handleYearChange = (event: SelectChangeEvent<string>) => {
    const year = Number(event.target.value);
    onYearChange(year);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Период
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="year-select-label">Отчетный год</InputLabel>
        <Select
          labelId="year-select-label"
          value={String(selectedYear)}
          onChange={handleYearChange}
          label="Отчетный год"
        >
          {[...Array(4)].map((_, index) => {
            const year = currentYear - index;
            return (
              <MenuItem key={year} value={String(year)}>
                {year}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
