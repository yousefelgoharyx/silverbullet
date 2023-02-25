import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {createStyles, useTheme} from '../utils/createStyles';
import PaperPlaneRight from 'phosphor-react-native/src/icons/PaperPlaneRight';
const ChatBar = () => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.text}
        placeholder="Type a message"
      />
      <PaperPlaneRight size={24} />
    </View>
  );
};

const useStyles = createStyles(theme =>
  StyleSheet.create({
    container: {
      height: 80,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
    },
    input: {
      height: 56,
      width: '90%',
      backgroundColor: theme.secondary,
      borderRadius: 56 / 2,
      paddingHorizontal: 16,
      marginEnd: 8,
      color: theme.text,
    },
  }),
);

export default ChatBar;
