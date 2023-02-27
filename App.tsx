import React from "react";
import AppInternal from "./AppInternal";
import { AuthProvider } from "./src/providers/AuthProvider";
import { SchemeProvider } from "./src/theme/ThemeProvider";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App2 = () => {
  return (
    <SchemeProvider>
      <AuthProvider>
        <AppInternal />
      </AuthProvider>
    </SchemeProvider>
  );
};

export default App2;
