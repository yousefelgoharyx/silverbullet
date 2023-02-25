import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {createStyles} from '../utils/createStyles';
import Text from './Text';

type InputProps = {
  hint: string;
} & React.ComponentProps<typeof TextInput>;
const Input = (props: InputProps) => {
  const {hint, style, ...rest} = props;
  const styles = useStyles();
  return (
    <View style={[styles.inputWrapper, style]}>
      <TextInput style={styles.input} cursorColor="#000" {...rest} />
      <View style={styles.hintWrapper}>
        <Text weight="bold" style={styles.hint}>
          {hint}
        </Text>
      </View>
    </View>
  );
};

const useStyles = createStyles(theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    inputWrapper: {
      width: '100%',
      position: 'relative',
      height: 56,
      borderWidth: 2,
      borderColor: theme.text,
      borderRadius: 56 / 2,
    },
    input: {
      height: 56,
      width: '100%',
      paddingHorizontal: 24,
      fontFamily: 'poppins-regular',
    },
    hintWrapper: {
      position: 'absolute',
      paddingHorizontal: 6,
      top: -10,
      left: 20,
      backgroundColor: theme.primary,
      borderRadius: 8,
    },
    hint: {
      fontSize: 12,
      color: theme.text,
    },
  }),
);
export default Input;
