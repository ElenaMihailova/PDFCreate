import FinancialInfoForm from "../../components/financial-info-form/FinancialInfoForm";
import { SummaryTable } from "../../components/summary-table/SummaryTable";
import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FinanceInfoView = () => {
  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate("/certificate");
  };

  return (
    <Stack>
      <SummaryTable />
      <FinancialInfoForm />
      <Button
        variant="contained"
        color="primary"
        onClick={handleNextStep}
        sx={{ alignSelf: "flex-end", marginTop: 2 }}
      >
        Формирование справки
      </Button>
    </Stack>
  );
};
