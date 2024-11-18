import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { AuthPage } from '../pages/auth-page/AuthPageConatainer';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;