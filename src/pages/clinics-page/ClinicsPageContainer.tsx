import { ClinicsPageView } from "./ClinicsPageView";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { clinics } from "../../data/clinics";

export const ClinicsPage = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["clinicId"]);

  const handleClinicClick = (id: string) => {
    setCookie("clinicId", id, { path: "/" });
    navigate(`/form`);
  };
  return (
    <ClinicsPageView clinics={clinics} handleClinicClick={handleClinicClick} />
  );
};
