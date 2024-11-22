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
  responsibility: {
    lastName: string;
    firstName: string;
    middleName: string;
    date: string;
  };
  patient: {
    lastName: string;
    firstName: string;
    middleName: string;
    patientId: string;
    birthDate: string;
    documentNumber?: string;
    documentIssueDate?: string;
  };
  taxpayer: {
    lastName: string;
    firstName: string;
    middleName: string;
    taxpayerId: string;
    birthDate: string;
    documentCode?: string;
    documentNumber: string;
    documentIssueDate: string;
  };
  financialInfo: {
    serviceCode1Expense: number;
    serviceCode2Expense: number;
  };
}

export const CertificateFormView: React.FC<CertificateFormViewProps> = ({
  data,
  year,
  reportNumber,
  reportCorNumber,
  responsibility,
  taxpayer,
  patient,
  financialInfo,
}) => {
  return (
    <Stack>
      <ReportSummary
        data={data}
        year={year}
        reportNumber={reportNumber}
        reportCorNumber={reportCorNumber}
        responsibility={responsibility}
        taxpayer={taxpayer}
        patient={patient}
        financialInfo={financialInfo}
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
      />
    </Stack>
  );
};
