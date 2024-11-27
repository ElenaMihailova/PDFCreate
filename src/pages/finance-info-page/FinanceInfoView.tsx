import FinancialInfoForm from "../../components/financial-info-form/FinancialInfoForm";
import { Button, Paper, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const FinanceInfoView = () => {
  const navigate = useNavigate();


  const { serviceCode1Expense, serviceCode2Expense } = useSelector(
    (state: RootState) => state.financial
  );

  const handleNextStep = () => {
    navigate("/certificate");
  };

  const isNextButtonDisabled = !(serviceCode1Expense > 0 || serviceCode2Expense > 0);

  return (
    <Container sx={{ padding: 2 }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
        }}
      >
        <FinancialInfoForm />
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextStep}
          sx={{ alignSelf: "flex-end", marginTop: 2 }}
          disabled={isNextButtonDisabled} 
        >
          Формирование справки
        </Button>
      </Paper>
    </Container>
  );
};
