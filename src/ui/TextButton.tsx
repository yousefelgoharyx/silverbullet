import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";

type Props = React.PropsWithChildren<{
  icon?: React.ReactNode;
}> &
  React.ComponentProps<typeof TouchableOpacity>;
const TextButton = (props: Props) => {
  const { icon, children, ...rest } = props;
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {icon}
      <Text weight="bold" size={18} style={{ textTransform: "uppercase" }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
export default TextButton;
