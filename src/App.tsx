import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import AppRouter from "./routes/AppRouters";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
