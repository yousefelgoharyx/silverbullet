import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {createStyles} from '../utils/createStyles';
import ArrowArcLeft from 'phosphor-react-native/src/icons/ArrowRight';
type NextButtonProps = {
  onPress: () => void;
} & React.ComponentProps<typeof TouchableOpacity>;

const NextButton = ({onPress, ...rest}: NextButtonProps) => {
  const styles = useStyles();
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={styles.arrowWrapper}>
          <ArrowArcLeft size={28} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const useStyles = createStyles(theme =>
  StyleSheet.create({
    container: {
      position: 'relative',
    },
    circle: {
      width: 48,
      height: 48,
      borderRadius: 48,
      borderStyle: 'solid',
      borderRightColor: theme.text,
      borderRightWidth: 2,

      borderLeftColor: theme.text,
      borderLeftWidth: 2,

      borderTopColor: theme.primary,
      borderTopWidth: 2,

      borderBottomColor: theme.text,
      borderBottomWidth: 2,
      transform: [{rotate: '-90deg'}],
    },
    arrowWrapper: {
      position: 'absolute',
      top: 10,
      left: 8,
    },
  }),
);

export default NextButton;
