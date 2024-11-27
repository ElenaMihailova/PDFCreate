import "./App.css";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { theme } from "./theme";
import AppRouter from "./routes/AppRouters";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            ":root": {
              "--primary-color": theme.palette.primary.main,
              "--secondary-color": theme.palette.secondary.main,
              "--background-color": theme.palette.background.default,
              "--text-primary": theme.palette.text.primary,
              "--text-secondary": theme.palette.text.secondary,
            },
          })}
        />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
