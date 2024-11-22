import createCertificate from "./generateReport.js";

interface ConstructorProps {
  orgData: string;
  inn: string;
  kpp: string;
  year: number;
  reportNumber: string;
  reportCorNumber: string;
  responsibility: {
    lastName: string;
    firstName: string;
    middleName: string;
    date: string;
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
  patient: {
    lastName: string;
    firstName: string;
    middleName: string;
    patientId: string;
    birthDate: string;
    documentNumber: string;
    documentIssueDate?: string;
  };
}

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
  const patientBirthDate = formatDate(patient.birthDate)
  const patientDocIssueDate = formatDate(patient.documentIssueDate)

  const handleCreatePdf = () => {
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
      Patient_INN: patient.patientId.split("").join("  "),

      Patient_DD: patientBirthDate.DD,
      Patient_MM: patientBirthDate.MM,
      Patient_YYYY: patientBirthDate.YYYY,
      Patient_doc_Type: "2 1", //const

      Patient_doc_DD: patientDocIssueDate.DD,
      Patient_doc_MM: patientDocIssueDate.MM,
      Patient_doc_YYYY: patientDocIssueDate.YYYY,
      Patient_doc_serial_num: patient.documentNumber.split("").join("  "),
      Report_year: formattedYear,

      Amount_code_2: "5",
      Amount_code_1: "6",

      Spec_code_1: "1",
      Spec_code_2: "2",
    };

    createCertificate(data);
  };

  return (
    <>
      <button onClick={handleCreatePdf}>Создать справку</button>
    </>
  );
};

export default Constructor;
