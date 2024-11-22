import { Stack } from "@mui/material";
import OrganizationForm from "../../components/organization-form/OrganizationForm";
import CountBlock from "../../components/count-block/CountBlock";
import TaxpayerForm from "../../components/taxpayer-form/TaxpayerForm";
import PatientForm from "../../components/patient-form/PatientForm";
import ResponsibilityForm from "../../components/responsibility-form/ResponsibilityForm";
import { YearBlock } from "../../components/year-block/YearBlock";
import { TaxpayerPatientIndicator } from "../../components/taxpayer-form/TaxpayerPatientIndicator";
import { GoToFinancialInfoButton } from "../../components/Button";

interface FormFillingViewProps {
  organizationData: {
    inn: string;
    kpp: string;
    shortName: string;
  };
  indicatorValue: string;
  setIndicatorValue: (value: string) => void;
  currentYear: number; 
  selectedYear: number;
  onYearChange: (year: number) => void; 
}

export const FormFillingView: React.FC<FormFillingViewProps> = ({
  organizationData,
  indicatorValue,
  setIndicatorValue,
  currentYear,
  selectedYear,
  onYearChange,
}) => {
  return (
    <Stack>
      <CountBlock />
      <YearBlock
        currentYear={currentYear}
        selectedYear={selectedYear}
        onYearChange={onYearChange}
      />

      <OrganizationForm organizationData={organizationData} />
      <ResponsibilityForm />
      <TaxpayerForm />
      <TaxpayerPatientIndicator
        value={indicatorValue}
        onChange={setIndicatorValue}
      />
      {indicatorValue === "0" && <PatientForm />}
      <GoToFinancialInfoButton />
    </Stack>
  );
};
