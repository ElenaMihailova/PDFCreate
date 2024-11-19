import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const GoToFinancialInfoButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToFinancialInfo = () => {
    navigate("/finance");
  };

  return (
    <MuiButton
      variant="contained"
      color="primary"
      onClick={handleGoToFinancialInfo}
      sx={{ margin: "16px 0" }}
    >
      Переход к финансовой информации
    </MuiButton>
  );
};
