import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import Container from "../ui/Container";
import Input from "../ui/Input";
import NextButton from "../ui/NextButton";
import Text from "../ui/Text";
import SignIn from "phosphor-react-native/src/icons/SignIn";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../utils/createStyles";
import { useAuth } from "../providers/AuthProvider";

const Login = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSignup = () => navigation.navigate("Signup" as never);
  const handleLogin = async () => {
    try {
      setLoading(true);
      Keyboard.dismiss();
      await auth.login(form);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Container style={styles.container}>
      <Text weight="bold" style={styles.heading}>
        Log in
      </Text>

      <Input
        onChangeText={(username) => {
          setForm({ ...form, username });
        }}
        hint="Username"
        placeholder="yousefelgoharyx"
        style={{ marginBottom: 16 }}
      />
      <Input
        onChangeText={(password) => {
          setForm({ ...form, password });
        }}
        secureTextEntry
        placeholder="********"
        hint="Password"
      />
      {loading ? (
        <ActivityIndicator
          size={48}
          style={{ marginTop: 64 }}
          color={theme.text}
        />
      ) : (
        <NextButton onPress={handleLogin} style={{ marginTop: 64 }} />
      )}

      <TouchableOpacity style={styles.signup} onPress={handleSignup}>
        <SignIn size={24} />
        <Text
          weight="bold"
          size={18}
          style={{ marginStart: 8, textTransform: "uppercase" }}
        >
          Sign up
        </Text>
      </TouchableOpacity>
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
