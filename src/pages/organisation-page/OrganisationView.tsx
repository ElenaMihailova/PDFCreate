import { Stack } from "@mui/material";
import OrganizationForm from "../../components/organization-form/OrganizationForm";
import CountBlock from "../../components/count-block/CountBlock";
import ResponsibilityForm from "../../components/responsibility-form/ResponsibilityForm";
import { YearBlock } from "../../components/year-block/YearBlock";
import { Button as MuiButton } from "@mui/material";

interface OrganisationViewProps {
  organizationData: {
    inn: string;
    kpp: string;
    shortName: string;
  };
  currentYear: number;
  selectedYear: number;
  onYearChange: (year: number) => void;
  handleNextPage: () => void;
}

export const OrganisationView: React.FC<OrganisationViewProps> = ({
  organizationData,
  currentYear,
  selectedYear,
  onYearChange,
  handleNextPage,
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
      <MuiButton variant="contained" color="primary" onClick={handleNextPage}>
        Заполнение информации о пациенте
      </MuiButton>
    </Stack>
  );
};
