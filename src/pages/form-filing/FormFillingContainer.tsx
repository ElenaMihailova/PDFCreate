import { FormFillingView } from "./FormFillingView";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import medicalOrganizations from "../../data/medical-organizations";

export const FormFillingPage = () => {
  const [cookies] = useCookies(["clinicId"]);
  const [organizationData, setOrganizationData] = useState({
    inn: "",
    kpp: "",
    shortName: "",
  });

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
  

  return <FormFillingView organizationData={organizationData} />;
};
