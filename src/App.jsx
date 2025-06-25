import React, { useState } from "react";

import "./App.css";
import Authentication from "./pages/Authentication";
import { createTheme, ThemeProvider } from "@mui/material";

class App extends React.Component {
  render() {
    return (
      <>
        <Authentication />
      </>
    );
  }
}

export default App;
