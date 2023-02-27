import { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
import { useScheme } from "../theme/ThemeProvider";
const useInitApp = () => {
  const auth = useAuth();
  const scheme = useScheme();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // measure time
        const start = Date.now();

        const fontPromise = Font.loadAsync({
          "poppins-regular": Poppins_400Regular,
          "poppins-bold": Poppins_700Bold,
          "poppins-medium": Poppins_500Medium,
        });
        const authPromise = auth.initAuth();
        const schemePromise = scheme.initScheme();
        await Promise.all([fontPromise, authPromise, schemePromise]);

        // measure time
        const end = Date.now();
        console.log("App ready in", end - start, "ms");
      } catch (e) {
        console.error(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  return appIsReady;
};

export default useInitApp;
