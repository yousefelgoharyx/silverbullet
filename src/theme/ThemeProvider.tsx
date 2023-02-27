import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState, PropsWithChildren } from "react";
import { useColorScheme } from "react-native";

type ColorScheme = "dark" | "light" | "default";
// create theme context with default theme

type SchemeContextType = {
  scheme: ColorScheme;
  setScheme: (scheme: ColorScheme) => void;
  initScheme: () => void;
};

// @ts-ignore
const SchemeContext = createContext<SchemeContextType>();

// create function to update Scheme
export const useScheme = () => useContext(SchemeContext);

// create Scheme provider
export const SchemeProvider = ({ children }: PropsWithChildren) => {
  const preferred = useColorScheme();
  const [scheme, setSchemeState] = useState<ColorScheme>(preferred ?? "light");

  async function setScheme(newScheme: ColorScheme) {
    await AsyncStorage.setItem("scheme", newScheme);
    setSchemeState(newScheme);
  }

  async function getCurrentScheme(): Promise<ColorScheme | null> {
    return (await AsyncStorage.getItem("scheme")) as ColorScheme | null;
  }

  async function initScheme() {
    const currentScheme = await getCurrentScheme();
    setScheme(currentScheme ?? "light");
  }

  return (
    <SchemeContext.Provider value={{ scheme, setScheme, initScheme }}>
      {children}
    </SchemeContext.Provider>
  );
};
