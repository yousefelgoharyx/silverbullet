import React from "react";
import { StyleSheet, Pressable } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { createStyles, useTheme } from "../utils/createStyles";

type Props = {
  open: boolean;
  onChange: (newState: boolean) => void;
};
const Switch = (props: Props) => {
  const position = useSharedValue(props.open ? 18 : 2);
  const theme = useTheme();
  const yStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: position.value }],
    };
  });

  const bgColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        position.value,
        [2, 18],
        [theme.gray2, theme.green]
      ),
    };
  });

  const styles = useStyles();
  const onChange = () => {
    props.onChange(!props.open);
    position.value = withTiming(props.open ? 2 : 18, { duration: 200 });
  };

  return (
    <Pressable onPress={onChange}>
      <Animated.View style={[styles.switch, bgColor]}>
        <Animated.View style={[styles.circle, yStyles]} />
      </Animated.View>
    </Pressable>
  );
};

const useStyles = createStyles((theme) =>
  StyleSheet.create({
    switch: {
      width: 40,
      height: 24,
      borderRadius: 12,
    },
    circle: {
      width: 20,
      height: 20,
      borderRadius: 12,
      top: 1.9,
      backgroundColor: theme.text,
      elevation: 3,
    },
  })
);
export default Switch;
