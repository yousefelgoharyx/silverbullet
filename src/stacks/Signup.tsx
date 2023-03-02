import React, { useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import Container from "../ui/Container";
import Text from "../ui/Text";
import SignIn from "phosphor-react-native/src/icons/SignIn";
import { useNavigation } from "@react-navigation/native";
import TextButton from "../ui/TextButton";
import SignupForm, { SignupSchema } from "../components/Signup/SignupForm";
import { useAuth } from "../providers/AuthProvider";
import { AxiosError } from "axios";
import FormError from "../ui/FormError";
const Signup = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => navigation.navigate("Login" as never);

  const handleSubmit = async (values: SignupSchema) => {
    try {
      setLoading(true);
      Keyboard.dismiss();
      await auth.signup(values);
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
        Signup
      </Text>

      <SignupForm onSubmit={handleSubmit} loading={loading} />
      <FormError error={error} />

      <TextButton onPress={handleLogin} icon={<SignIn size={24} />} style={styles.signup}>
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
