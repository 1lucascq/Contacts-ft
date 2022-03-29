import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";
import "./App.css";
import PhoneBook from "./pages/PhoneBook";

function App() {
  const darkTheme = () => createTheme({
      palette: {
        mode: "dark",
      },
    });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <PhoneBook />
    </ThemeProvider>
  );
}

export default App;
