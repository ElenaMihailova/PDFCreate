import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { AuthPage } from "../pages/auth-page/AuthPageConatainer";
import { FormFillingPage } from "../pages/form-filing/FormFillingContainer";
import { ClinicsPage } from "../pages/clinics-page/ClinicsPageContainer";
import { FinanceInfo } from "../pages/finance-info-page/FinanceInfoContainer";
import { CertificateForm } from "../pages/сertificate-form-page/CertificateFormContainer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/form" element={<FormFillingPage />} />
        <Route path="/finance" element={<FinanceInfo />} />
        <Route path="/certificate" element={<CertificateForm />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
