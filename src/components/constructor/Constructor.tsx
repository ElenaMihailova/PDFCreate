import createCertificate from "./generateReport.js";
import { ConstructorProps } from "../../types.js";
import { Button } from "@mui/material";

const Constructor: React.FC<ConstructorProps> = ({
  orgData,
  inn,
  kpp,
  year,
  reportNumber,
  reportCorNumber,
  responsibility,
  taxpayer,
  patient,
  indicatorValue,
  financialInfo,
}) => {
  const formattedYear = year.toString().split("").join("  ");

  const formatDate = (date?: string) => {
    if (!date) {
      return { DD: " ", MM: " ", YYYY: " " };
    }
    const [year, month, day] = date.split("-");
    return {
      DD: day.split("").join("  "),
      MM: month.split("").join("  "),
      YYYY: year.split("").join("  "),
    };
  };

  const birthDate = formatDate(taxpayer.birthDate);
  const taxpayerDocIssueDate = formatDate(taxpayer?.documentIssueDate);
  const signDate = formatDate(responsibility.date);
  const patientBirthDate = formatDate(patient.birthDate);
  const patientDocIssueDate = formatDate(patient.documentIssueDate);

  const handleCreatePdf = () => {
    const isTaxpayerAndPatientSame = indicatorValue === "1";

    const data = {
      Blank_num: reportNumber.split("").join("  "),
      Correction_num: reportCorNumber.split("").join("  "),
      Org_data: orgData.split("").join("  "),
      INN: inn.split("").join("  "),
      KPP: kpp.split("").join("  "),

      Payer_INN: taxpayer.taxpayerId
        ? taxpayer.taxpayerId.split("").join("  ")
        : " ",
      Payer_last_name: taxpayer.lastName.split("").join("  "),
      Payer_first_name: taxpayer.firstName.split("").join("  "),
      Payer_middle_name: taxpayer.middleName.split("").join("  "),
      Payer_DD: birthDate.DD,
      Payer_MM: birthDate.MM,
      Payer_YYYY: birthDate.YYYY,
      Doc_Type: "2  1", //const
      Doc_DD: taxpayerDocIssueDate.DD,
      Doc_MM: taxpayerDocIssueDate.MM,
      Doc_YYYY: taxpayerDocIssueDate.YYYY,
      Serial_num: taxpayer.documentNumber.split("").join("  "),

      First_name_approve: responsibility.firstName.split("").join("  "),
      Last_name_approve: responsibility.lastName.split("").join("  "),
      Middle_name_approve: responsibility.middleName.split("").join("  "),
      Sign_DD: signDate.DD,
      Sign_MM: signDate.MM,
      Sign_YYYY: signDate.YYYY,
      Sign_date: responsibility.date,

      Patient_last_name: patient.lastName.split("").join("  "),
      Patient_first_name: patient.firstName.split("").join("  "),
      Patient_middle_name: patient.middleName.split("").join("  "),
      Patient_INN: patient.patientId
        ? patient.patientId.split("").join("  ")
        : " ",

      Patient_DD: patientBirthDate.DD,
      Patient_MM: patientBirthDate.MM,
      Patient_YYYY: patientBirthDate.YYYY,
      Patient_doc_Type: "2 1", //const

      Patient_doc_DD: patientDocIssueDate.DD,
      Patient_doc_MM: patientDocIssueDate.MM,
      Patient_doc_YYYY: patientDocIssueDate.YYYY,
      Patient_doc_serial_num: patient.documentNumber
        ? patient.documentNumber.split("").join("  ")
        : " ",
      Report_year: formattedYear,

      Amount_code_1: financialInfo.serviceCode1Expense
        .toString()
        .split("")
        .join("  "),
      Amount_code_2: financialInfo.serviceCode2Expense
        .toString()
        .split("")
        .join("  "),

      Spec_code_1: "0  0",
      Spec_code_2: "0  0",

      Bul: isTaxpayerAndPatientSame ? "1" : "0",
      Pages: isTaxpayerAndPatientSame ? "0  0  1" : "0  0  2",
    };

    createCertificate(data);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleCreatePdf}
      sx={{ alignSelf: "flex-end", marginTop: 2 }}
    >
      Создать справку
    </Button>
  );
};

export default Constructor;
