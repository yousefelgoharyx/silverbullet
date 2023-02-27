import { PropsWithChildren } from "react";
import { SchemeProvider } from "../theme/ThemeProvider";
import { AuthProvider } from "./AuthProvider";
import { IconContext } from "phosphor-react-native/src/lib/index";
import { useTheme } from "../utils/createStyles";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <SchemeProvider>
      <AppProviders>{children}</AppProviders>
    </SchemeProvider>
  );
};

const AppProviders = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  return (
    <AuthProvider>
      <IconContext.Provider
        value={{
          color: theme.text,
          size: 24,
          weight: "duotone",
        }}
      >
        {children}
      </IconContext.Provider>
    </AuthProvider>
  );
};

export default AppProviders;
