import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import AppRouter from "./routes/AppRouters";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
