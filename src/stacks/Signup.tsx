import React from "react";
import { StyleSheet } from "react-native";
import Container from "../ui/Container";
import Input from "../ui/Input";
import NextButton from "../ui/NextButton";
import Text from "../ui/Text";
import SignIn from "phosphor-react-native/src/icons/SignIn";
import { useNavigation } from "@react-navigation/native";
import Column from "../ui/Column";
import TextButton from "../ui/TextButton";
const Signup = () => {
  const navigation = useNavigation();
  const handleSignup = () => navigation.navigate("Home" as never);
  const handleLogin = () => navigation.navigate("Login" as never);
  return (
    <Container style={styles.container}>
      {/* Heading */}
      <Text weight="bold" style={styles.heading}>
        Signup
      </Text>

      {/* Inputs */}
      <Column gap={16}>
        <Input hint="Name" placeholder="Yousef" />
        <Input hint="Username" placeholder="yousefelgoharyx" />
        <Input secureTextEntry placeholder="********" hint="Password" />
      </Column>

      {/* Next Button */}
      <NextButton onPress={handleSignup} style={{ marginTop: 64 }} />

      {/* Login */}
      <TextButton style={styles.signup} onPress={handleLogin} icon={<SignIn size={24} />}>
        Login
      </TextButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  heading: {
    fontSize: 28,
    textTransform: "uppercase",
    marginBottom: 16,
  },
  signup: {
    position: "absolute",
    bottom: 32,
  },
});
export default Signup;
