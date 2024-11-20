import { PDFDocument } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit"; 

async function fillPdfFields(data) {
  try {
    const formUrl = "/assets/form/blank.pdf"; 
    const fontUrl = "/assets/fonts/Roboto-Regular.ttf"; 

    const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
    const fontBytes = await fetch(fontUrl).then((res) => res.arrayBuffer());

    console.log("Размер файла шрифта (байты):", fontBytes.byteLength);

    const pdfDoc = await PDFDocument.load(formPdfBytes);
    pdfDoc.registerFontkit(fontkit);
    const customFont = await pdfDoc.embedFont(fontBytes);

    const form = pdfDoc.getForm();
    const fields = form.getFields();
    fields.forEach((field) => {
      console.log("Имя поля:", field.getName());
    });

    const setTextWithFont = (fieldName, text) => {
      const field = form.getTextField(fieldName);
      field.setText(text || "");
      field.updateAppearances(customFont);
    };

    setTextWithFont("Correction_num", data.Correction_num);
    setTextWithFont("Blank_num", data.Blank_num);
    setTextWithFont("Org_data", data.Org_data);
    setTextWithFont("Bul", data.Bul);
    setTextWithFont("Amount_code_1", data.Amount_code_1);
    setTextWithFont("Amount_code_2", data.Amount_code_2);
    setTextWithFont("First_name_approve", data.First_name_approve);
    setTextWithFont("Last_name_approve", data.Last_name_approve);
    setTextWithFont("Middle_name_approve", data.Middle_name_approve);
    setTextWithFont("Sign_MM", data.Sign_MM);
    setTextWithFont("Sign_YYYY", data.Sign_YYYY);
    setTextWithFont("Sign_DD", data.Sign_DD);
    setTextWithFont("Pages", data.Pages);
    setTextWithFont("KPP", data.KPP);
    setTextWithFont("INN", data.INN);
    setTextWithFont("Patient_last_name", data.Patient_last_name);
    setTextWithFont("Patient_first_name", data.Patient_first_name);
    setTextWithFont("Patient_middle_name", data.Patient_middle_name);
    setTextWithFont("Patient_INN", data.Patient_INN);
    setTextWithFont("Payer_INN", data.Payer_INN);
    setTextWithFont("Payer_middle_name", data.Payer_middle_name);
    setTextWithFont("Payer_first_name", data.Payer_first_name);
    setTextWithFont("Payer_last_name", data.Payer_last_name);
    setTextWithFont("Payer_DD", data.Payer_DD);
    setTextWithFont("Payer_MM", data.Payer_MM);
    setTextWithFont("Payer_YYYY", data.Payer_YYYY);
    setTextWithFont("Patient_DD", data.Patient_DD);
    setTextWithFont("Patient_MM", data.Patient_MM);
    setTextWithFont("Patient_YYYY", data.Patient_YYYY);
    setTextWithFont("Doc_Type", data.Doc_Type);
    setTextWithFont("Doc_MM", data.Doc_MM);
    setTextWithFont("Doc_DD", data.Doc_DD);
    setTextWithFont("Doc_YYYY", data.Doc_YYYY);
    setTextWithFont("Serial_num", data.Serial_num);
    setTextWithFont("Patient_doc_Type", data.Patient_doc_Type);
    setTextWithFont("Patient_doc_DD", data.Patient_doc_DD);
    setTextWithFont("Patient_doc_MM", data.Patient_doc_MM);
    setTextWithFont("Patient_doc_YYYY", data.Patient_doc_YYYY);
    setTextWithFont("Patient_doc_serial_num", data.Patient_doc_serial_num);
    setTextWithFont("Spec_code_1", data.Spec_code_1);
    setTextWithFont("Spec_code_2", data.Spec_code_2);
    setTextWithFont("Sign_date", data.Sign_date);
    setTextWithFont("Report_year", data.Report_year);

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");

    setTimeout(() => URL.revokeObjectURL(url), 10000);
  } catch (error) {
    console.error("Ошибка при работе с PDF:", error);
  }
}

export default fillPdfFields;
