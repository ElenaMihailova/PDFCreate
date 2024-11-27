import { Container, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
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
  const taxpayer = useSelector((state: RootState) => state.taxpayer);

  const isNextButtonDisabled = !(
    taxpayer.lastName &&
    taxpayer.firstName &&
    taxpayer.documentNumber &&
    taxpayer.birthDate &&
    taxpayer.documentIssueDate
  );

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
        <GoToFinancialInfoButton isNextButtonDisabled={isNextButtonDisabled} />
      </Paper>
    </Container>
  );
};
