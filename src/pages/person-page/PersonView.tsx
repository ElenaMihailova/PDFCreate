import { Container, Paper } from "@mui/material";
import TaxpayerForm from "../../components/taxpayer-form/TaxpayerForm";
import PatientForm from "../../components/patient-form/PatientForm";
import { TaxpayerPatientIndicator } from "../../components/taxpayer-form/TaxpayerPatientIndicator";
import { GoToFinancialInfoButton } from "../../components/Button";

interface PersonViewProps {
  indicatorValue: string;
  setIndicatorValue: (value: string) => void;
}

export const PersonView: React.FC<PersonViewProps> = ({
  indicatorValue,
  setIndicatorValue,
}) => {
  return (
    <Container sx={{ padding: 2 }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
        }}
      >
        <TaxpayerForm />
        <TaxpayerPatientIndicator
          value={indicatorValue}
          onChange={setIndicatorValue}
        />
        {indicatorValue === "0" && <PatientForm />}
        <GoToFinancialInfoButton />
      </Paper>
    </Container>
  );
};
