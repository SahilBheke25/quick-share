import { IconSearch } from "@tabler/icons-react";
import { Autocomplete, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./Header.module.css";

const links = [
  { link: "/rent", label: "Rent" },
  { link: "/lend", label: "Lend" },
  // { link: "/learn", label: "Learn" },
  { link: "/aboutUs", label: "AboutUs" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    // <header className={classes.header}>
    <div className={classes.inner}>
      <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        {/* <img alt="logo" /> */}
        <text>QuickShare</text>
      </Group>
      <Group>
        <Autocomplete
          className={classes.search}
          placeholder="Search"
          leftSection={<IconSearch size={16} stroke={1.5} />}
          data={["Tractor", "Powl"]}
          visibleFrom="xs"
        />
      </Group>
      <Group>
        <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          {items}
        </Group>
      </Group>
    </div>
    // </header>
  );
}

export default Header;
