import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { createTheme, ThemeProvider } from "@mui/material";
import Page from "./components/Page";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ef4444",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<Page component={<LandingPage />} />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
