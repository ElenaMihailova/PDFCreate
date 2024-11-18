import { Stack } from "@mui/material";
import OrganizationForm from "../../components/organization-form/OrganizationForm";
import CountBlock from "../../components/count-block/CountBlock";

export const FormFillingView = () => {
  return (
    <Stack>
      <CountBlock/>
      <OrganizationForm />
    </Stack>
  )
};
