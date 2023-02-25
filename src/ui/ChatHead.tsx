import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ContactImage from './Avatar';
import Container from './Container';
import Text from './Text';
import CaretLeft from 'phosphor-react-native/src/icons/CaretLeft';
import {createStyles} from '../utils/createStyles';
type ChatHeadProps = {
  name: string;
  image: string;
  status: string;
  onBack: () => void;
};
const ChatHead = (props: ChatHeadProps) => {
  const styles = useStyles();
  return (
    <View style={styles.header}>
      <Container style={styles.headerContainer}>
        <TouchableOpacity onPress={props.onBack}>
          <CaretLeft weight="regular" size={32} style={{marginEnd: 4}} />
        </TouchableOpacity>
        <ContactImage image={props.image} />
        <View style={styles.infoContainer}>
          <Text weight="bold" size={18} style={{lineHeight: 24}}>
            {props.name}
          </Text>
          <Text size={14} weight="medium" style={{color: '#0D7612'}}>
            {props.status}
          </Text>
        </View>
      </Container>
    </View>
  );
};

const useStyles = createStyles(theme =>
  StyleSheet.create({
    header: {
      backgroundColor: theme.primary,
      height: 75 + 32,
    },
    headerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    infoContainer: {
      marginStart: 8,
      flexShrink: 1,
      top: 2,
    },
  }),
);
export default ChatHead;
