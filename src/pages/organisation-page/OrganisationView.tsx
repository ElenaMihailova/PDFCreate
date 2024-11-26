import { Container, Paper } from "@mui/material";
import OrganizationForm from "../../components/organization-form/OrganizationForm";
import CountBlock from "../../components/count-block/CountBlock";
import ResponsibilityForm from "../../components/responsibility-form/ResponsibilityForm";
import { YearBlock } from "../../components/year-block/YearBlock";
import { Button as MuiButton } from "@mui/material";
import { Header } from "../../components/header/Header";

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
      <Container sx={{ padding: 2 }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 2,
          }}
        >
          <CountBlock />
          <YearBlock
            currentYear={currentYear}
            selectedYear={selectedYear}
            onYearChange={onYearChange}
          />

          <OrganizationForm organizationData={organizationData} />
          <ResponsibilityForm />
          <MuiButton
            variant="contained"
            color="primary"
            onClick={handleNextPage}
          >
            Заполнение информации о пациенте
          </MuiButton>
        </Paper>
      </Container>
  );
};
