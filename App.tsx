import React from "react";
import AppInternal from "./AppInternal";
import { SchemeProvider } from "./src/theme/ThemeProvider";

const App2 = () => {
  return (
    <SchemeProvider>
      <AppInternal />
    </SchemeProvider>
  );
};

export default App2;
