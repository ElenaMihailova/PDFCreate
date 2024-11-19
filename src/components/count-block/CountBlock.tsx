import { Box, TextField } from "@mui/material";

const CountBlock = () => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField label="Номер справки" variant="outlined" fullWidth />
      <TextField label="Номер корректировки" variant="outlined" fullWidth />
    </Box>
  );
};

export default CountBlock;
