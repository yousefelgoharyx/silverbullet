import React, { useCallback, useEffect, useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { IconContext } from "phosphor-react-native/src/lib/index";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/stacks/Home";
import { StatusBar } from "react-native";
import { themes } from "./src/theme/theme";
import Login from "./src/stacks/Login";
import Signup from "./src/stacks/Signup";
import Chat from "./src/stacks/Chat";
import { useTheme } from "./src/utils/createStyles";
import Settings from "./src/stacks/Settings";
import { useScheme } from "./src/theme/ThemeProvider";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
import { useAuth } from "./src/providers/AuthProvider";
import * as SplashScreen from "expo-splash-screen";
const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: themes.light.primary,
  },
};
const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: themes.dark.primary,
  },
};
const Stack = createStackNavigator();

function AppInternal() {
  const [scheme] = useScheme();
  const theme = useTheme();
  const auth = useAuth();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "poppins-regular": Poppins_400Regular,
          "poppins-bold": Poppins_700Bold,
          "poppins-medium": Poppins_500Medium,
        });
        await auth.initAuth();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer
      theme={scheme === "dark" ? Dark : Light}
      onReady={onLayoutRootView}
    >
      <IconContext.Provider
        value={{
          color: theme.text,
          size: 24,
          weight: "duotone",
        }}
      >
        <StatusBar
          backgroundColor={theme.primary}
          barStyle={scheme === "dark" ? "light-content" : "dark-content"}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {auth.user ? (
            <>
              <Stack.Screen component={Home} name="Home" />
              <Stack.Screen component={Chat} name="Chat" />
              <Stack.Screen component={Settings} name="Settings" />
            </>
          ) : (
            <>
              <Stack.Screen component={Login} name="Login" />
              <Stack.Screen component={Signup} name="Signup" />
            </>
          )}
        </Stack.Navigator>
      </IconContext.Provider>
    </NavigationContainer>
  );
}

export default AppInternal;
