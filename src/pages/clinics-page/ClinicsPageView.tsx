import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface Clinic {
  name: string;
  id: string;
}

interface ClinicsPageViewProps {
  clinics: Clinic[];
  handleClinicClick: (id: string) => void;
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
        {clinics.map((clinic) => (
          <ListItemButton
            key={clinic.id}
            data-id={clinic.id}
            onClick={() => handleClinicClick(clinic.id)}
          >
            <ListItemText primary={clinic.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};
