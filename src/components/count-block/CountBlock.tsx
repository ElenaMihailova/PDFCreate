import { Box, TextField } from "@mui/material";

const CountBlock = () => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField label="Номер справки" variant="outlined" fullWidth />
      <TextField label="Номер корректировки" variant="outlined" fullWidth />
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Страница (нумерация)"
          variant="outlined"
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default CountBlock;
