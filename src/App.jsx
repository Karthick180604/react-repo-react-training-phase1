import React, { useState } from "react";

import "./App.css";
import Authentication from "./pages/Authentication";
import { createTheme, ThemeProvider } from "@mui/material";

class App extends React.Component {
  render() {
    const theme = createTheme({
      palette: {
        primary: {
          main: "#32CD32",
        },
        secondary: {
          main: "#800080",
        },
      },
    });
    return (
      <>
        <ThemeProvider theme={theme}>
          <Authentication />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
