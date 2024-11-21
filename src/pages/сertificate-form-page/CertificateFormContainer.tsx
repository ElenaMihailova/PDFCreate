import { CertificateFormView } from "./CertificateFormPageView";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import medicalOrganizations from "../../data/medical-organizations";
import { setClinicId } from "../../redux/slices/companySlice";

export const CertificateForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedClinicId = localStorage.getItem("clinicId");
    if (savedClinicId) {
      dispatch(setClinicId(savedClinicId));
    }
  }, [dispatch]);

  const clinicId = useSelector((state: RootState) => state.company.clinicId);

  const organization = medicalOrganizations.find((org) =>
    org.clinicIds.includes(clinicId || "")
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

  return <CertificateFormView data={data} />;
};
