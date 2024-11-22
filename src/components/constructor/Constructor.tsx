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
    taxpayerId?: string;
    birthDate?: string;
    documentNumber?: string;
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
}) => {
  const formattedYear = year.toString().split("").join("  ");

  const formatDate = (date?: string) => {
    if (!date) {
      return { DD: "Н  е  т", MM: "Н  е  т", YYYY: "Н  е  т" };
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
  const signDate = formatDate(responsibility.date)

  const handleCreatePdf = () => {
    const data = {
      Blank_num: reportNumber.split("").join("  "),
      Correction_num: reportCorNumber.split("").join("  "),
      Org_data: orgData.split("").join("  "),
      INN: inn.split("").join("  "),
      KPP: kpp.split("").join("  "),

      Payer_INN: taxpayer.taxpayerId
        ? taxpayer.taxpayerId.split("").join("  ")
        : "Н  е  т",
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
      Sign_MM:signDate.MM,
      Sign_YYYY: signDate.YYYY,
      Sign_date: responsibility.date,


      Patient_last_name: "И  в  а  н  о  в",
      Patient_first_name: "И  в  а  н",
      Patient_middle_name: "И  в  а  н  о  в  и  ч",
      Patient_INN: "1  2  3  4  5  6  7  8  9  0",

      Patient_DD: "2  0",
      Patient_MM: "1  1",
      Patient_YYYY: "2  0  2  4",
      
      Patient_doc_Type: "2 1",
      Patient_doc_DD: "1  5",
      Patient_doc_MM: "0  6",
      Patient_doc_YYYY: "2  0  2  2",
      Patient_doc_serial_num: "X  Y  9  8  7  6  5  4  3",
      Spec_code_1: "1  0  0  0",
      Spec_code_2: "2  0  0  0",
      Report_year: formattedYear,
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
