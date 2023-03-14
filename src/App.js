import React from "react";
//mui
import { createTheme, ThemeProvider } from "@mui/material";
//project imports
import Routes from "./routes";

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
