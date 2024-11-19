import { Stack } from "@mui/material";
import OrganizationForm from "../../components/organization-form/OrganizationForm";
import CountBlock from "../../components/count-block/CountBlock";
import TaxpayerForm from "../../components/taxpayer-form/TaxpayerForm";
import PatientForm from "../../components/patient-form/PatientForm";
import FinancialInfoForm from "../../components/financial-info-form/FinancialInfoForm";
import ResponsibilityForm from "../../components/responsibility-form/ResponsibilityForm";
import { YearBlock } from "../../components/year-block/YearBlock";

interface FormFillingViewProps {
  organizationData: {
    inn: string;
    kpp: string;
    shortName: string;
  };
}

export const FormFillingView: React.FC<FormFillingViewProps> = ({
  organizationData,
}) => {
  return (
    <Stack>
      <CountBlock />
      <YearBlock/>
      <OrganizationForm organizationData={organizationData} />
      <TaxpayerForm />
      <ResponsibilityForm />
      <FinancialInfoForm />
      <PatientForm />
    </Stack>
  );
};
