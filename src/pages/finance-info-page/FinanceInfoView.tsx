import FinancialInfoForm from "../../components/financial-info-form/FinancialInfoForm";
import { Button, Paper, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FinanceInfoView = () => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate("/certificate");
  };

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
        >
          Формирование справки
        </Button>
      </Paper>
    </Container>
  );
};
