import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Container from '../ui/Container';
import Input from '../ui/Input';
import NextButton from '../ui/NextButton';
import Text from '../ui/Text';
import SignIn from 'phosphor-react-native/src/icons/SignIn';
import {useNavigation} from '@react-navigation/native';
const Signup = () => {
  const navigation = useNavigation();
  const handleSignup = () => navigation.navigate('Home' as never);
  const handleLogin = () => navigation.navigate('Login' as never);
  return (
    <Container style={styles.container}>
      <Text weight="bold" style={styles.heading}>
        Signup
      </Text>
      <Input hint="Name" placeholder="Yousef" style={{marginBottom: 16}} />
      <Input
        hint="Username"
        placeholder="yousefelgoharyx"
        style={{marginBottom: 16}}
      />
      <Input secureTextEntry placeholder="********" hint="Password" />
      <NextButton onPress={handleSignup} style={{marginTop: 64}} />
      <TouchableOpacity style={styles.signup} onPress={handleLogin}>
        <SignIn size={24} />
        <Text
          weight="bold"
          size={18}
          style={{marginStart: 8, textTransform: 'uppercase'}}>
          Login
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  heading: {
    fontSize: 28,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  signup: {
    position: 'absolute',
    bottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Signup;
