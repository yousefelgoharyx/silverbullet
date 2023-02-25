import React from "react";
import { Text as T } from "react-native";
import { useTheme } from "../utils/createStyles";

type Props = {
  weight?: "bold" | "regular" | "medium" | "light";
  size?: number;
} & React.ComponentProps<typeof T>;
function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const Text = (props: Props) => {
  const { style, children, weight = "regular", size = 16, ...rest } = props;
  const fontFamily = `poppins-${weight}`;
  const theme = useTheme();
  return (
    <T
      {...rest}
      style={[{ fontFamily, fontSize: size, color: theme.text }, style]}
    >
      {children}
    </T>
  );
};

export default Text;
