import {
  Anchor,
  Button,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { UserCredentials } from "../types/types";
import classes from "./styles/login.module.css";

type Props = {
  authenticate: (user: UserCredentials) => void;
};

export default function LoginComponent({ authenticate }: Props) {
  const [credential, setCredential] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  return (
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
          <Anchor<"a"> href="/register" fw={700} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
          
          {/* <a href="/register"><Anchor>Register</Anchor></a> */}
        </Text>
      </Paper>
    </div>
  );
}
