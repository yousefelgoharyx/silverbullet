import React from "react";
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
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
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
  let [fontsLoaded] = useFonts({
    "poppins-regular": Poppins_400Regular,
    "poppins-bold": Poppins_700Bold,
    "poppins-medium": Poppins_500Medium,
  });
  if (!fontsLoaded) return null;
  return (
    <NavigationContainer theme={scheme === "dark" ? Dark : Light}>
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
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Signup} name="Signup" />
          <Stack.Screen component={Chat} name="Chat" />
          <Stack.Screen component={Settings} name="Settings" />
        </Stack.Navigator>
      </IconContext.Provider>
    </NavigationContainer>
  );
}

export default AppInternal;
