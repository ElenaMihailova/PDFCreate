import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface ClinicsPageViewProps {
  clinics: string[];
  handleClinicClick: (clinic: string) => void;
}

export const ClinicsPageView: React.FC<ClinicsPageViewProps> = ({
  clinics,
  handleClinicClick,
}) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Выберите клинику, в которой оказывались услуги
      </Typography>
      <List>
        {clinics.map((clinic, index) => (
          <ListItemButton key={index} onClick={() => handleClinicClick(clinic)}>
            <ListItemText primary={clinic} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};
