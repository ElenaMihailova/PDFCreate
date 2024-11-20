declare module "./generateReport.js" {
  interface Data {
    Correction_num: string;
    Blank_num: string;
    Org_data: string;
    INN: string;
    KPP: string;
    LastName?: string;
    FirstName?: string;
    MiddleName?: string;
    Patient_last_name?: string;
    Patient_first_name?: string;
    Patient_middle_name?: string;
    Patient_INN?: string;
    Payer_INN?: string;
    Payer_last_name?: string;
    Payer_first_name?: string;
    Payer_middle_name?: string;
    Payer_DD?: string;
    Payer_MM?: string;
    Payer_YYYY?: string;
    Patient_DD?: string;
    Patient_MM?: string;
    Patient_YYYY?: string;
    Doc_Type?: string;
    Doc_DD?: string;
    Doc_MM?: string;
    Doc_YYYY?: string;
    Serial_num?: string;
    Patient_doc_Type?: string;
    Patient_doc_DD?: string;
    Patient_doc_MM?: string;
    Patient_doc_YYYY?: string;
    Patient_doc_serial_num?: string;
    Spec_code_1?: string;
    Spec_code_2?: string;
    Sign_date?: string;
    Report_year?: string;
  }

  export default function createCertificate(data: Data): void;
}
