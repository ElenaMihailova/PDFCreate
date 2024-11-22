import { FormFillingView } from "./FormFillingView";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import medicalOrganizations from "../../data/medical-organizations";
import { setYear } from "../../redux/slices/reportSlice";
import { useDispatch } from "react-redux";

export const FormFillingPage = () => {
  const [cookies] = useCookies(["clinicId"]);
  const dispatch = useDispatch();
  const currentYear = new Date().getFullYear();

  const [organizationData, setOrganizationData] = useState({
    inn: "",
    kpp: "",
    shortName: "",
  });

  const [indicatorValue, setIndicatorValue] = useState<string>("1");

  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    const clinicId = String(cookies.clinicId);

    const organization = medicalOrganizations.find((org) =>
      org.clinicIds.includes(clinicId)
    );

    if (organization) {
      setOrganizationData({
        inn: organization.inn,
        kpp: organization.kpp,
        shortName: organization.name,
      });
    } else {
      console.log("No matching organization found for clinicId:", clinicId);
      setOrganizationData({
        inn: "",
        kpp: "",
        shortName: "",
      });
    }
  }, [cookies.clinicId]);

  const handleYearChange = (year: number) => {
    dispatch(setYear(year));
    setSelectedYear(year);
  };

  return (
    <FormFillingView
      organizationData={organizationData}
      indicatorValue={indicatorValue}
      setIndicatorValue={setIndicatorValue}
      currentYear={currentYear}
      selectedYear={selectedYear}
      onYearChange={handleYearChange}
    />
  );
};
