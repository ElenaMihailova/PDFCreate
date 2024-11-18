import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from '@mui/material';

export const AuthPageView = () => {

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Авторизация');
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '440px'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: '100%',
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            textAlign: 'center',
          }}
        >
          Вход в систему
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Логин"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              paddingY: 1.5,
              fontWeight: 'bold',
            }}
          >
            Войти
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}