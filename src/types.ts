export interface Responsibility {
  lastName: string;
  firstName: string;
  middleName: string;
  date: string;
}

export interface Taxpayer {
  lastName: string;
  firstName: string;
  middleName: string;
  taxpayerId: string;
  birthDate: string;
  documentCode?: string;
  documentNumber: string;
  documentIssueDate: string;
}

export interface Patient {
  lastName: string;
  firstName: string;
  middleName: string;
  taxpayerId?: string;
  patientId?: string;
  birthDate?: string;
  documentNumber?: string;
  documentIssueDate?: string;
}

export interface FinancialInfo {
  serviceCode1Expense: number;
  serviceCode2Expense: number;
}

export interface ClinicData {
  clinicName: string;
  INN: string;
  KPP: string;
}

export interface ConstructorProps {
  orgData: string;
  inn: string;
  kpp: string;
  year: number;
  reportNumber: string;
  reportCorNumber: string;
  responsibility: Responsibility;
  taxpayer: Taxpayer;
  patient: Patient;
  indicatorValue: string;
  financialInfo: FinancialInfo;
}

export interface CertificateFormViewProps {
  data: ClinicData;
  year: number;
  reportNumber: string;
  reportCorNumber: string;
  responsibility: Responsibility;
  taxpayer: Taxpayer;
  patient: Patient;
  financialInfo: FinancialInfo;
  indicatorValue: string;
}

export interface ReportSummaryProps {
  data: ClinicData;
  year: number;
  reportNumber: string;
  reportCorNumber: string;
  responsibility: Responsibility;
  taxpayer: Taxpayer;
  patient: Patient;
  financialInfo: FinancialInfo;
  indicatorValue: string;
}
