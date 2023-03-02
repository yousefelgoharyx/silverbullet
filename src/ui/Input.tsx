import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { createStyles, useTheme } from "../utils/createStyles";
import Text from "./Text";

type InputProps = {
  hint: string;
  error?: string;
} & React.ComponentProps<typeof TextInput>;
const Input = (props: InputProps) => {
  const { hint, style, error, ...rest } = props;
  const styles = useStyles();
  const theme = useTheme();
  const borderStyle = { borderColor: error ? theme.red : theme.text };

  return (
    <View style={[styles.inputWrapper, borderStyle]}>
      <TextInput style={[styles.input, style]} cursorColor="#000" {...rest} />
      <View style={styles.hintWrapper}>
        <Text weight="bold" color={error && theme.red} style={styles.hint}>
          {error || hint}
        </Text>
      </View>
    </View>
  );
};

const useStyles = createStyles((theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.secondary,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    inputWrapper: {
      width: "100%",
      position: "relative",
      height: 56,
      borderWidth: 2,
      borderRadius: 56 / 2,
    },
    input: {
      height: 56,
      width: "100%",
      paddingHorizontal: 24,
      fontFamily: "poppins-regular",
    },
    hintWrapper: {
      position: "absolute",
      paddingHorizontal: 6,
      top: -10,
      left: 20,
      backgroundColor: theme.primary,
      borderRadius: 8,
    },
    hint: {
      fontSize: 12,
    },
    error: {
      color: theme.red,
      fontSize: 12,
    },
  })
);
export default Input;
