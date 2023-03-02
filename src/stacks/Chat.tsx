import React, { useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Container from "../ui/Container";
import ChatHead from "../ui/ChatHead";
import ChatMessage from "../ui/ChatMessage";
import { getImage } from "../utils/getImage";
import ChatBar from "../ui/ChatBar";
import { createStyles, useTheme } from "../utils/createStyles";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const msg = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
cumque natus quis necessitatibus vero, asperiores error incidunt
esse nisi ipsum at illum maxime voluptates minima minus est ipsam.
Provident excepturi ab, iste debitis tenetur laborum nisi
voluptates iure nulla repellendus nam incidunt cum vitae placeat,
perspiciatis omnis nesciunt! Officia, commodi.`;

const Chat = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const styles = useStyles();
  const theme = useTheme();
  const height = useSharedValue(40);
  const lastScrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    if (event.contentOffset.y + 0.2 > lastScrollY.value) {
      height.value = withTiming(40);
    } else {
      height.value = withTiming(75);
    }
    if (event.contentOffset.y > 0) {
      lastScrollY.value = event.contentOffset.y;
    }
  });

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ChatHead
        name="Anthony"
        image={getImage("anthony", "b6e3f4")}
        onBack={navigation.goBack}
        status="Online"
        height={height}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        onContentSizeChange={(e, h) => {
          scrollViewRef.current?.scrollToEnd({ animated: false });
        }}
        ref={scrollViewRef}
        contentContainerStyle={[styles.scrollView, { paddingTop: 75 + 32 }]}
        style={{ backgroundColor: theme.primary }}
      >
        <Container>
          <ChatMessage text={msg} />
          <ChatMessage text={msg} me />
          <ChatMessage text={msg} me />
          <ChatMessage text={msg} me />
        </Container>
      </Animated.ScrollView>
      <ChatBar />
    </View>
  );
};

const useStyles = createStyles((theme) =>
  StyleSheet.create({
    scrollView: {
      paddingBottom: 16,
      backgroundColor: theme.primary,
    },
  })
);

export default Chat;
