import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../utils/createStyles";
import Text from "./Text";
type Props = {
  onPress?: () => void;
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  textColor?: string;
};
const SettingsItem = (props: Props) => {
  const theme = useTheme();
  const { textColor = theme.text } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.right}
      <Text weight="medium" style={[styles.textFix, { color: textColor }]}>
        {props.title}
      </Text>
      <View style={{ marginLeft: "auto" }}>{props.left}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    justifyContent: "flex-start",
  },
  textFix: {
    top: 2,
    marginStart: 8,
  },
});

export default SettingsItem;
