import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setReportNumber, setCorNumber } from "../../redux/slices/reportSlice";

const CountBlock = () => {
  const dispatch = useDispatch();

  const reportNumber = useSelector(
    (state: RootState) => state.report.reportNumber
  );
  const reportCorNumber = useSelector(
    (state: RootState) => state.report.reportCorNumber
  );

  const handleReportNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setReportNumber(event.target.value));
  };

  const handleCorNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setCorNumber(event.target.value));
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField
        label="Номер справки"
        variant="outlined"
        fullWidth
        value={reportNumber}
        onChange={handleReportNumberChange}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Номер корректировки"
        variant="outlined"
        fullWidth
        value={reportCorNumber}
        onChange={handleCorNumberChange}
      />
    </Box>
  );
};

export default CountBlock;
