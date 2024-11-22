import { Stack } from "@mui/material";
import Constructor from "../../components/constructor/Constructor";
import { ReportSummary } from "../../components/report-summary/ReportSummary";

interface CertificateFormViewProps {
  data: {
    clinicName: string;
    INN: string;
    KPP: string;
  };
  year: number;
  reportNumber: string;
  reportCorNumber: string;
}

export const CertificateFormView: React.FC<CertificateFormViewProps> = ({
  data,
  year,
  reportNumber,
  reportCorNumber,
}) => {
  return (
    <Stack>
      <ReportSummary
        data={data}
        year={year}
        reportNumber={reportNumber}
        reportCorNumber={reportCorNumber}
      />
      <Constructor
        orgData={data.clinicName}
        inn={data.INN}
        kpp={data.KPP}
        year={year}
        reportNumber={reportNumber}
        reportCorNumber={reportCorNumber}
      />
    </Stack>
  );
};
