import {
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Container,
  Paper,
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
    <Container sx={{ padding: 2 }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h2" gutterBottom>
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
      </Paper>
    </Container>
  );
};
