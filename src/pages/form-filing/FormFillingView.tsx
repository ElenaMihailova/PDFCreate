import { Stack } from "@mui/material";
import OrganizationForm from "../../components/organization-form/OrganizationForm";
import CountBlock from "../../components/count-block/CountBlock";
import TaxpayerForm from "../../components/taxpayer-form/TaxpayerForm";
import PatientForm from "../../components/patient-form/PatientForm";
import FinancialInfoForm from "../../components/financial-info-form/FinancialInfoForm";
import ResponsibilityForm from "../../components/responsibility-form/ResponsibilityForm";

export const FormFillingView = () => {
  return (
    <Stack>
      <CountBlock/>
      <OrganizationForm />
      <TaxpayerForm/>
      <ResponsibilityForm/>
      <FinancialInfoForm/>
      <PatientForm/>
    </Stack>
  )
};
