import React, { useState } from "react";
import { StyleSheet, Keyboard } from "react-native";
import Container from "../ui/Container";
import Input from "../ui/Input";
import NextButton from "../ui/NextButton";
import Text from "../ui/Text";
import SignIn from "phosphor-react-native/src/icons/SignIn";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../providers/AuthProvider";
import Column from "../ui/Column";
import TextButton from "../ui/TextButton";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { AxiosError } from "axios";
import FormError from "../ui/FormError";

const LoginSchema = z.object({
  username: z.string().min(3, "3 characters long"),
  password: z.string().min(3, "3 characters long"),
});

type LoginSchema = z.infer<typeof LoginSchema>;

const Login = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<LoginSchema>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: zodResolver(LoginSchema),
  });

  function onSubmit(fn: (values: LoginSchema) => void) {
    return () => {
      const result = form.validate();
      if (result.hasErrors) return;
      fn(form.values);
    };
  }

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

  const usernameProps = form.getInputProps("username");
  const passwordProps = form.getInputProps("password");
  return (
    <Container style={styles.container}>
      {/* Heading */}
      <Text weight="bold" style={styles.heading}>
        Log in
      </Text>

      <Column gap={16}>
        <Input
          onChangeText={usernameProps.onChange}
          value={usernameProps.value}
          error={usernameProps.error}
          hint="Username"
          placeholder="yousefelgoharyx"
        />
        <Input
          onChangeText={passwordProps.onChange}
          value={passwordProps.value}
          error={passwordProps.error}
          secureTextEntry
          placeholder="********"
          hint="Password"
        />
      </Column>

      {/* Next Button */}
      <NextButton
        loading={loading}
        onPress={onSubmit(handleLogin)}
        style={{ marginTop: 32 }}
      />

      {/* Error */}
      <FormError error={error} />

      {/* Signup */}
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
