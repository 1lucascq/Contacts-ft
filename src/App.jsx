import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import React from "react";
// import { Routes, Route } from "react-router-dom";
import "./App.css";
import PhoneBook from "./pages/PhoneBook";

// function App() {
//   return (
//     <Routes>
//       <Route exact path="/" element={<PhoneBook />} />
//     </Routes>
//   );
// }
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
