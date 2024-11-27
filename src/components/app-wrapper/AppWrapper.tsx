import React from "react";
import { Box } from "@mui/material";
import { Header } from "../header/Header";
import { useLocation, useNavigate } from "react-router-dom";

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldShowHeader = location.pathname !== "/login";
  const isOnClinicsPage = location.pathname === "/clinics";

  const handleNewCertificateClick = () => {
    localStorage.clear();
    navigate("/clinics");
    window.location.reload();
  };

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/clinics");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {shouldShowHeader && (
        <Header
          onBackClick={handleBackClick}
          onNewCertificateClick={handleNewCertificateClick}
          disabledArrow={isOnClinicsPage}
        />
      )}
      <Box
        sx={{
          marginTop: shouldShowHeader ? "7%" : "0",
          flexGrow: 1,
          padding: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
