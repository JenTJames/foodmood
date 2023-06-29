import LandingPage from "./pages/LandingPage";
import { createTheme, ThemeProvider } from "@mui/material";

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
      <div className="flex min-h-screen min-w-full bg-slate-100 p-5">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
