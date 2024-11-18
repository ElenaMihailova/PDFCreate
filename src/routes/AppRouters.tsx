import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { AuthPage } from "../pages/auth-page/AuthPageConatainer";
import { FormFillingPage } from "../pages/form-filing/FormFillingContainer";
import { ClinicsPage } from "../pages/clinics-page/ClinicsPageContainer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/form" element={<FormFillingPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
