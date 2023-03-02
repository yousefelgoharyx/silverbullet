import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import Column from "../../ui/Column";
import Input from "../../ui/Input";
import NextButton from "../../ui/NextButton";

type Props = {
  onSubmit: (values: SignupSchema) => void;
  loading: boolean;
};

const SignupForm = (props: Props) => {
  const form = useForm<SignupSchema>({
    initialValues: {
      username: "",
      password: "",
      name: "",
    },
    validate: zodResolver(SignupSchema),
  });

  function onSubmit(fn: (values: SignupSchema) => void) {
    return () => {
      const result = form.validate();
      if (result.hasErrors) return;
      fn(form.values);
    };
  }

  const nameProps = form.getInputProps("name");
  const usernameProps = form.getInputProps("username");
  const passwordProps = form.getInputProps("password");
  return (
    <>
      <Column gap={16}>
        <Input
          onChangeText={nameProps.onChange}
          value={nameProps.value}
          error={nameProps.error}
          hint="Name"
          placeholder="yousefelgoharyx"
        />
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
        loading={props.loading}
        onPress={onSubmit(props.onSubmit)}
        style={{ marginTop: 32 }}
      />
    </>
  );
};

const SignupSchema = z.object({
  username: z.string().min(3, "3 characters long"),
  password: z.string().min(3, "3 characters long"),
  name: z.string().min(3, "3 characters long"),
});

export type SignupSchema = z.infer<typeof SignupSchema>;

export default SignupForm;
