import { ClinicsPageView } from "./ClinicsPageView";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { clinics } from "../../data/clinics";

import { useDispatch } from "react-redux";
import { setClinicId } from "../../redux/slices/companySlice";

export const ClinicsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["clinicId"]);

  const handleClinicClick = (id: string) => {
    setCookie("clinicId", id, { path: "/" });
    localStorage.setItem("clinicId", id);
    dispatch(setClinicId(id));
    navigate(`/organisation`);
  };

  return (
    <ClinicsPageView clinics={clinics} handleClinicClick={handleClinicClick} />
  );
};
