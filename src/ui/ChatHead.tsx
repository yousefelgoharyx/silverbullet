import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ContactImage, { AnimatedAvatar } from "./Avatar";
import Container from "./Container";
import Text from "./Text";
import CaretLeft from "phosphor-react-native/src/icons/CaretLeft";
import { createStyles } from "../utils/createStyles";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
type ChatHeadProps = {
  name: string;
  image: string;
  status: string;
  onBack: () => void;
  height: SharedValue<number>;
};

const ChatHead = (props: ChatHeadProps) => {
  const { height } = props;
  const styles = useStyles();
  const animatedHeight = useAnimatedStyle(() => ({
    height: height.value + 32,
  }));
  return (
    <Animated.View style={[styles.header, animatedHeight]}>
      <Container style={styles.headerContainer}>
        <TouchableOpacity onPress={props.onBack}>
          <CaretLeft weight="regular" size={32} style={{ marginEnd: 4 }} />
        </TouchableOpacity>
        <AnimatedAvatar size={height} image={props.image} />
        <View style={styles.infoContainer}>
          <Text weight="bold" size={18} style={{ lineHeight: 24 }}>
            {props.name}
          </Text>
          <Text size={14} weight="medium" style={{ color: "#0D7612" }}>
            {props.status}
          </Text>
        </View>
      </Container>
    </Animated.View>
  );
};

const useStyles = createStyles((theme) =>
  StyleSheet.create({
    header: {
      backgroundColor: theme.primary,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      width: "100%",
    },
    headerContainer: {
      alignItems: "center",
      flexDirection: "row",
    },
    infoContainer: {
      marginStart: 8,
      flexShrink: 1,
      top: 2,
    },
  })
);
export default ChatHead;
