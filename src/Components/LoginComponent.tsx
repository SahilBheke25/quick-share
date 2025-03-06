import {
  Anchor,
  Button,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Container,
  Group,
} from "@mantine/core";
import { useState } from "react";
import { UserCredentials } from "../types/types";
import classes from "./styles/login.module.css";

type Props = {
  authenticate: (user: UserCredentials) => void;
  handleRegister: () => void
};

export default function LoginComponent({ authenticate, handleRegister }: Props) {
  const [credential, setCredential] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  return (
    // <Container size={420} my={40}>
    //   <Title ta="center" className={classes.title}>
    //     Welcome back!
    //   </Title>
    //   <Text c="dimmed" size="sm" ta="center" mt={5}>
    //     Do not have an account yet?{' '}
    //     <Anchor size="sm" component="button">
    //       Create account
    //     </Anchor>
    //   </Text>

    //   <Paper withBorder shadow="md" p={30} mt={30} radius="md">
    //     <TextInput label="Email" placeholder="you@mantine.dev" required />
    //     <PasswordInput label="Password" placeholder="Your password" required mt="md" />
    //     <Group justify="space-between" mt="lg">
    //       {/* <Checkbox label="Remember me" /> */}
    //       {/* <Anchor component="button" size="sm">
    //         Forgot password?
    //       </Anchor> */}
    //     </Group>
    //     <Button fullWidth mt="xl">
    //       Sign in
    //     </Button>
    //   </Paper>
    // </Container>

    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to QuickShare!
        </Title>

        <TextInput
          label="Username"
          placeholder="username"
          size="md"
          value={credential.username}
          onChange={(event) =>
            setCredential((prev) => ({
              ...prev,
              username: event.target.value,
            }))
          }
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          value={credential.password}
          onChange={(event) =>
            setCredential((prev) => ({
              ...prev,
              password: event.target.value,
            }))
          }
        />
        <Button
          fullWidth
          mt="xl"
          size="md"
          onClick={() => authenticate(credential)}
          disabled={!credential.username || !credential.password}
        >
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a"> fw={700} onClick={handleRegister}>
            Register
          </Anchor>
          
          {/* <a href="/register"><Anchor>Register</Anchor></a> */}
        </Text>
      </Paper>
    </div>
  );
}
