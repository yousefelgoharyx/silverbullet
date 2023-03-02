import React, { useState } from "react";
import { StyleSheet, Keyboard } from "react-native";
import Container from "../ui/Container";
import Text from "../ui/Text";
import SignIn from "phosphor-react-native/src/icons/SignIn";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../providers/AuthProvider";
import TextButton from "../ui/TextButton";
import { AxiosError } from "axios";
import FormError from "../ui/FormError";
import LoginForm, { LoginSchema } from "../components/Login/LoginForm";

const Login = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = () => navigation.navigate("Signup" as never);
  const handleLogin = async (values: LoginSchema) => {
    try {
      setLoading(true);
      Keyboard.dismiss();
      await auth.login(values);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.error);
      }
      setLoading(false);
    }
  };

  return (
    <Container style={styles.container}>
      <Text weight="bold" style={styles.heading}>
        Log in
      </Text>

      <LoginForm onSubmit={handleLogin} loading={loading} />

      <FormError error={error} />

      <TextButton
        style={styles.signup}
        onPress={handleSignup}
        icon={<SignIn size={24} />}
      >
        Sign up
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
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Login;
