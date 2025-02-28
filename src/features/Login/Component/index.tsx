import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./login.module.css";
import { useState } from "react";
import { UserCredentials } from "../../types/types";

type Props = {
  authenticate: (user: UserCredentials) => void
}
export default function LoginComponent({authenticate}: Props) {

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
          onChange={(event) => { setCredential((prev) => ({...prev, username: event.target.value}))}}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          onChange={(event) => { setCredential((prev) => ({...prev, password: event.target.value}))}}
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" onClick={()=> authenticate(credential)}>
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a">
            href="#"
            fw={700}
            onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
