import { ClinicsPageView } from "./ClinicsPageView";
import { useNavigate } from "react-router-dom";
import { clinics } from "../../data/clinics";

export const ClinicsPage = () => {
  const navigate = useNavigate();

  const handleClinicClick = () => {
    navigate(`/form`);
  };
  return (
    <ClinicsPageView clinics={clinics} handleClinicClick={handleClinicClick} />
  );
};
