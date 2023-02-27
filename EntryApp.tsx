import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
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

import { useAuth } from "./src/providers/AuthProvider";
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

function EntryApp() {
  const { scheme } = useScheme();
  const theme = useTheme();
  const auth = useAuth();

  console.log("auth user value: ", auth.user);
  return (
    <NavigationContainer theme={scheme === "dark" ? Dark : Light}>
      <StatusBar
        backgroundColor={theme.primary}
        barStyle={scheme === "dark" ? "light-content" : "dark-content"}
      />
      {auth.user !== null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Chat} name="Chat" />
          <Stack.Screen component={Settings} name="Settings" />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Signup} name="Signup" />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default EntryApp;
