import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface GoToFinancialInfoButtonProps {
  isNextButtonDisabled: boolean;
}

export const GoToFinancialInfoButton: React.FC<
  GoToFinancialInfoButtonProps
> = ({ isNextButtonDisabled }) => {
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
      disabled={isNextButtonDisabled}
    >
      Переход к финансовой информации
    </MuiButton>
  );
};
