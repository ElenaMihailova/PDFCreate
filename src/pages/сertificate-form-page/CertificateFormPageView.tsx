import { Container, Paper } from "@mui/material";
import Constructor from "../../components/constructor/Constructor";
import { ReportSummary } from "../../components/report-summary/ReportSummary";
import { CertificateFormViewProps } from "../../types";

export const CertificateFormView: React.FC<CertificateFormViewProps> = ({
  data,
  year,
  reportNumber,
  reportCorNumber,
  responsibility,
  taxpayer,
  patient,
  financialInfo,
  indicatorValue,
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
        <ReportSummary
          data={data}
          year={year}
          reportNumber={reportNumber}
          reportCorNumber={reportCorNumber}
          responsibility={responsibility}
          taxpayer={taxpayer}
          patient={patient}
          financialInfo={financialInfo}
          indicatorValue={indicatorValue}
        />
        <Constructor
          orgData={data.clinicName}
          inn={data.INN}
          kpp={data.KPP}
          year={year}
          reportNumber={reportNumber}
          reportCorNumber={reportCorNumber}
          taxpayer={taxpayer}
          responsibility={responsibility}
          patient={patient}
          indicatorValue={indicatorValue}
          financialInfo={financialInfo}
        />
      </Paper>
    </Container>
  );
};
