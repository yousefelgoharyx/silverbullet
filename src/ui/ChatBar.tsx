import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { createStyles, useTheme } from "../utils/createStyles";
import PaperPlaneRight from "phosphor-react-native/src/icons/PaperPlaneRight";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  onTextChange?: (text: string) => void;
  onSend?: () => void;
} & React.ComponentProps<typeof TextInput>;
const ChatBar = (props: Props) => {
  const { onTextChange, onSend } = props;
  const styles = useStyles();
  const theme = useTheme();
  const typed = useSharedValue(1);
  const inputStyles = useAnimatedStyle(() => {
    return {
      width: withSpring(`${typed.value * 100}%`, {
        mass: 0.5,
      }),
    };
  });

  function handleTextChange(text: string) {
    if (text.length > 0) typed.value = 0.9;
    else typed.value = 1;
    onTextChange ? onTextChange(text) : null;
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[inputStyles, { zIndex: 1 }]}>
        <TextInput
          onChangeText={handleTextChange}
          style={[styles.input]}
          placeholderTextColor={theme.text}
          placeholder="Type a message"
          cursorColor={theme.text}
        />
      </Animated.View>
      <TouchableOpacity
        onPress={onSend}
        style={[
          styles.sendWrapper,
          {
            transform: [
              { translateX: Dimensions.get("window").width - 32 - 20 },
            ],
          },
        ]}
      >
        <PaperPlaneRight size={24} />
      </TouchableOpacity>
    </View>
  );
};

const useStyles = createStyles((theme) =>
  StyleSheet.create({
    container: {
      height: 80,
      backgroundColor: theme.primary,
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "row",
      paddingHorizontal: 20,
    },
    input: {
      height: 56,
      backgroundColor: theme.secondary,
      borderRadius: 56 / 2,
      paddingHorizontal: 16,
      marginEnd: 8,
      color: theme.text,
      zIndex: 1,
      width: "100%",
    },
    sendWrapper: {
      position: "absolute",
      paddingVertical: 8,
      height: 32,
      width: 32,
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default ChatBar;
