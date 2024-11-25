import { HashRouter, Route, Navigate, Routes } from "react-router-dom";
import { AuthPage } from "../pages/auth-page/AuthPageConatainer";
import { PersonPage } from "../pages/person-page/PersonContainer";
import { ClinicsPage } from "../pages/clinics-page/ClinicsPageContainer";
import { FinanceInfo } from "../pages/finance-info-page/FinanceInfoContainer";
import { CertificateForm } from "../pages/сertificate-form-page/CertificateFormContainer";
import { OrganisationPage } from "../pages/organisation-page/OrganisationContainer";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/organisation" element={<OrganisationPage />} />
        <Route path="/person" element={<PersonPage />} />
        <Route path="/finance" element={<FinanceInfo />} />
        <Route path="/certificate" element={<CertificateForm />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
