import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Container from '../ui/Container';
import ChatHead from '../ui/ChatHead';
import ChatMessage from '../ui/ChatMessage';
import {getImage} from '../utils/getImage';
import ChatBar from '../ui/ChatBar';
import {createStyles, useTheme} from '../utils/createStyles';
import {useNavigation} from '@react-navigation/native';

const msg = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
cumque natus quis necessitatibus vero, asperiores error incidunt
esse nisi ipsum at illum maxime voluptates minima minus est ipsam.
Provident excepturi ab, iste debitis tenetur laborum nisi
voluptates iure nulla repellendus nam incidunt cum vitae placeat,
perspiciatis omnis nesciunt! Officia, commodi.`;

const Chat = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View style={{flex: 1}}>
      <ChatHead
        name="Anthony"
        image={getImage('anthony', 'b6e3f4')}
        onBack={navigation.goBack}
        status="Online"
      />
      <ScrollView
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({animated: false})
        }
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollView}
        style={{backgroundColor: theme.primary}}>
        <Container>
          <ChatMessage text={msg} />
          <ChatMessage text={msg} me />
        </Container>
      </ScrollView>
      <ChatBar />
    </View>
  );
};

const useStyles = createStyles(theme =>
  StyleSheet.create({
    scrollView: {
      paddingBottom: 16,
      backgroundColor: theme.primary,
    },
  }),
);

export default Chat;
