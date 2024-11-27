import { PDFDocument } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

export interface CertificateData {
  Correction_num: string;
  Blank_num: string;
  Org_data: string;
  Bul?: string;
  Amount_code_1?: string;
  Amount_code_2?: string;
  First_name_approve?: string;
  Last_name_approve?: string;
  Middle_name_approve?: string;
  Sign_MM?: string;
  Sign_YYYY?: string;
  Sign_DD?: string;
  Pages?: string;
  KPP: string;
  INN: string;
  Patient_last_name: string;
  Patient_first_name: string;
  Patient_middle_name: string;
  Patient_INN: string;
  Payer_INN: string;
  Payer_middle_name?: string;
  Payer_first_name: string;
  Payer_last_name: string;
  Payer_DD?: string;
  Payer_MM?: string;
  Payer_YYYY?: string;
  Patient_DD?: string;
  Patient_MM?: string;
  Patient_YYYY?: string;
  Doc_Type?: string;
  Doc_MM?: string;
  Doc_DD?: string;
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

async function fillPdfFields(data: CertificateData): Promise<void> {
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

    // Выводит список доступных для заполнения полей
    // const fields = form.getFields();
    // fields.forEach((field) => {
    //   console.log("Имя поля:", field.getName());
    // });

    Object.entries(data).forEach(([key, value]) => {
      try {
        const field = form.getTextField(key);
        field.setText(value || "");
        field.updateAppearances(customFont);
      } catch (error) {
        console.warn(`Поле "${key}" не найдено в PDF.`);
      }
    });

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
