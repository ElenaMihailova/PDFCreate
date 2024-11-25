import { CertificateFormView } from "./CertificateFormPageView";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import medicalOrganizations from "../../data/medical-organizations";
import { setClinicId } from "../../redux/slices/companySlice";
import {
  setYear,
  setReportNumber,
  setCorNumber,
} from "../../redux/slices/reportSlice";
import { setResponsibilityData } from "../../redux/slices/responsibilitySlice";
import { setTaxpayerData } from "../../redux/slices/taxpayerSlice";
import { setPatientData } from "../../redux/slices/patientSlice";
import { setFinancialInfo } from "../../redux/slices/financialInfoSlice";
import { setIndicatorValue } from "../../redux/slices/indicatorSlice";

export const CertificateForm = () => {
  const dispatch = useDispatch();

  // Данные из Redux
  const clinicId = useSelector((state: RootState) => state.company.clinicId);
  const organization = medicalOrganizations.find((org) =>
    org.clinicIds.includes(clinicId || "")
  );
  const year = useSelector((state: RootState) => state.report.year);
  const reportNumber = useSelector(
    (state: RootState) => state.report.reportNumber
  );
  const reportCorNumber = useSelector(
    (state: RootState) => state.report.reportCorNumber
  );
  const responsibility = useSelector(
    (state: RootState) => state.responsibility
  );
  const taxpayer = useSelector((state: RootState) => state.taxpayer);
  const patient = useSelector((state: RootState) => state.patient);
  const financialInfo = useSelector((state: RootState) => state.financial);
  const indicatorValue = useSelector(
    (state: RootState) => state.indicator.value
  );

  const data = organization
    ? {
        clinicName: organization.name,
        INN: organization.inn,
        KPP: organization.kpp,
      }
    : {
        clinicName: "Неизвестная клиника",
        INN: "Не указано",
        KPP: "Не указано",
      };

  useEffect(() => {
    const savedClinicId = localStorage.getItem("clinicId");
    const savedYear = localStorage.getItem("year");
    const savedReportNumber = localStorage.getItem("reportNumber");
    const savedReportCorNumber = localStorage.getItem("reportCorNumber");
    const savedResponsibility = localStorage.getItem("responsibility");
    const savedTaxpayer = localStorage.getItem("taxpayer");
    const savedPatient = localStorage.getItem("patient");
    const savedFinancialInfo = localStorage.getItem("financialInfo");
    const savedIndicatorValue = localStorage.getItem("indicatorValue");

    if (savedClinicId) dispatch(setClinicId(savedClinicId));
    if (savedYear) dispatch(setYear(Number(savedYear)));
    if (savedReportNumber) dispatch(setReportNumber(savedReportNumber));
    if (savedReportCorNumber) dispatch(setCorNumber(savedReportCorNumber));
    if (savedResponsibility)
      dispatch(setResponsibilityData(JSON.parse(savedResponsibility)));
    if (savedTaxpayer) dispatch(setTaxpayerData(JSON.parse(savedTaxpayer)));
    if (savedPatient) dispatch(setPatientData(JSON.parse(savedPatient)));
    if (savedFinancialInfo)
      dispatch(setFinancialInfo(JSON.parse(savedFinancialInfo)));
    if (savedIndicatorValue) dispatch(setIndicatorValue(savedIndicatorValue));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("clinicId", clinicId || "");
    localStorage.setItem("year", year.toString());
    localStorage.setItem("reportNumber", reportNumber || "");
    localStorage.setItem("reportCorNumber", reportCorNumber || "");
    localStorage.setItem("responsibility", JSON.stringify(responsibility));
    localStorage.setItem("taxpayer", JSON.stringify(taxpayer));
    localStorage.setItem("patient", JSON.stringify(patient));
    localStorage.setItem("financialInfo", JSON.stringify(financialInfo));
    localStorage.setItem("indicatorValue", indicatorValue);
  }, [
    clinicId,
    year,
    reportNumber,
    reportCorNumber,
    responsibility,
    taxpayer,
    patient,
    financialInfo,
    indicatorValue,
  ]);

  return (
    <CertificateFormView
      data={data}
      year={year}
      reportNumber={reportNumber}
      reportCorNumber={reportCorNumber}
      responsibility={responsibility}
      taxpayer={taxpayer}
      patient={patient}
      financialInfo={financialInfo}
      indicatorValue={indicatorValue}
    />
  );
};
