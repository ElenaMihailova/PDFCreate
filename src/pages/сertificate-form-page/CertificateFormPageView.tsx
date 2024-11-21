import { Stack } from "@mui/material";
import Constructor from "../../components/constructor/Constructor";
import { ReportSummary } from "../../components/report-summary/ReportSummary";

interface CertificateFormViewProps {
  data: {
    clinicName: string;
    INN: string;
    KPP: string;
  };
}

export const CertificateFormView: React.FC<CertificateFormViewProps> = ({
  data,
}) => {
  return (
    <Stack>
      <ReportSummary data={data} />
      <Constructor orgData={data.clinicName} inn={data.INN} kpp={data.KPP} />
    </Stack>
  );
};
