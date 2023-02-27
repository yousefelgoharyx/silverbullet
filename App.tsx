import { View } from "react-native";
import { useCallback } from "react";
import EntryApp from "./EntryApp";
import * as SplashScreen from "expo-splash-screen";
import { AppProvider } from "./src/providers/AppProviders";
import useInitApp from "./src/hooks/useInitApp";

SplashScreen.preventAutoHideAsync();

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

const AppNavigator = () => {
  const isAppReady = useInitApp();

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) await SplashScreen.hideAsync();
  }, [isAppReady]);

  if (!isAppReady) return null;
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <EntryApp />
    </View>
  );
};

export default App;
