import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface TaxpayerPatientIndicatorProps {
  value: string;
  onChange: (value: string) => void;
}

export const TaxpayerPatientIndicator: React.FC<
  TaxpayerPatientIndicatorProps
> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Признак: Налогоплательщик и пациент являются одним лицом
        </FormLabel>
        <RadioGroup row value={value} onChange={handleChange}>
          <FormControlLabel value="1" control={<Radio />} label="Да" />
          <FormControlLabel value="0" control={<Radio />} label="Нет" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
