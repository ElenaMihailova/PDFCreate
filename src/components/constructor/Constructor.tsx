import createCertificate from "./generateReport.js";

const Constructor = () => {
  const handleCreatePdf = () => {
    const data = {
      Correction_num: "1  2  3",
      Blank_num: "4  5  6",
      Org_data: "О  О О  Б  Ь Ю  Т  И    Э  С  Т  Е  Т  И  К",
      INN: "7  8  1  4  6  9  6  6  1  5",
      KPP: "7  8  4  2  0  1  0  0  1",
      LastName: "Ромашка",
      FirstName: "11",
      MiddleName: "11",

      Patient_last_name: "И  в  а  н  о  в",
      Patient_first_name: "И  в  а  н",
      Patient_middle_name: "И  в  а  н  о  в  и  ч",
      Patient_INN: "1  2  3  4  5  6  7  8  9  0",
      Payer_INN: "0  9  8  7  6  5  4  3  2  1",
      Payer_last_name: "С  и  д  о  р  о  в",
      Payer_first_name: "П  е  т  р",
      Payer_middle_name: "П  е  т  р  о  в  и  ч",
      Payer_DD: "1  5",
      Payer_MM: "1  0",
      Payer_YYYY: "2  0  2  4",
      Patient_DD: "2  0",
      Patient_MM: "1  1",
      Patient_YYYY: "2  0  2  4",
      Doc_Type: "2  1",
      Doc_DD: "1  0",
      Doc_MM: "0  5",
      Doc_YYYY: "2  0  2  3",
      Serial_num: "A  B  1  2  3  4  5  6  7",
      Patient_doc_Type: "2 1",
      Patient_doc_DD: "1  5",
      Patient_doc_MM: "0  6",
      Patient_doc_YYYY: "2  0  2  2",
      Patient_doc_serial_num: "X  Y  9  8  7  6  5  4  3",
      Spec_code_1: "1  0  0  0",
      Spec_code_2: "2  0  0  0",
      Sign_date: "2  0  .  1  1  .  2  0  2  4",
      Report_year: "2  0  2  4",
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
