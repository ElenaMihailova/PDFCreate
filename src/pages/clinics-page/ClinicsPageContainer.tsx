import { ClinicsPageView } from "./ClinicsPageView";
import { useNavigate } from "react-router-dom";

const clinics = [
  "Москва, Петровка",
  "Москва, Тверская",
  "Москва, Сайкина",
  "Санкт-Петербург, Пл. Восстания",
  "Санкт-Петербург, Горьковская",
  "Казань",
  "Уфа",
  "Тверь",
];

export const ClinicsPage = () => {
  const navigate = useNavigate();

  const handleClinicClick = () => {
    navigate(`/form`);
  };
  return (
    <ClinicsPageView clinics={clinics} handleClinicClick={handleClinicClick} />
  );
};
