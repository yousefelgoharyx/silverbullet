import { Theme, themes } from "../theme/theme";
import { StyleSheet } from "react-native";
import { useScheme } from "../theme/ThemeProvider";

type NamedStyles<T> = StyleSheet.NamedStyles<T>;

export type StylerFn<T extends NamedStyles<T>> = (theme: Theme) => T;

export function createStyles<T extends NamedStyles<T>>(
  fn: StylerFn<T>
): () => T | NamedStyles<T> {
  return function useStyles() {
    const { scheme } = useScheme();
    return scheme ? fn(themes[scheme]) : fn(themes.light);
  };
}

export function useTheme(): Theme {
  const { scheme } = useScheme();
  return scheme ? themes[scheme] : themes.light;
}
