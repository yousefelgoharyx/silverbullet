import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  image: string;
  size?: number;
};
const Avatar = (props: Props) => {
  const { image, size = 75 } = props;
  return (
    <View
      style={[
        styles.imageContainer,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Image source={{ uri: image, width: size, height: size }} />
    </View>
  );
};

type AnimatedProps = {
  size: SharedValue<number>;
  image: string;
};
export const AnimatedAvatar = (props: AnimatedProps) => {
  const animatedStyles = useAnimatedStyle(() => ({
    width: props.size.value,
    height: props.size.value,
  }));
  const animatedBorderRadius = useAnimatedStyle(() => ({
    borderRadius: props.size.value / 2,
  }));
  return (
    <Animated.View
      style={[styles.imageContainer, animatedStyles, animatedBorderRadius]}
    >
      <Image source={{ uri: props.image }} style={{ flex: 1 }} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: "hidden",
    backgroundColor: "#eaeaea",
  },
});

export default Avatar;
