import React from "react";
import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Logo } from "../Logo";

interface HeaderProps {
  onBackClick: () => void;
  onNewCertificateClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onBackClick,
  onNewCertificateClick,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#ffffff",
        paddingY: "20px",
      }}
    >
      <Toolbar sx={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <IconButton
          edge="start"
          color="primary"
          aria-label="back"
          onClick={onBackClick}
          // sx={{ marginRight: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Logo />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={onNewCertificateClick}
        >
          Новая справка
        </Button>
      </Toolbar>
    </AppBar>
  );
};
