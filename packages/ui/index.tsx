import * as React from "react";
import {
  Header,
  Title,
  AppShell as MantineAppShell,
  MantineProvider,
  Navbar,
  UnstyledButton,
  Group,
  Text,
} from "@mantine/core";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
import { useStore } from "store";

// component exports
// export * from "./Button";
// export * from "./Header";

export type Route = {
  element: React.FunctionComponent;
  path: string;
};

export type NavLink = {
  label: string;
  path: string;
};

function MainLink({ label, path }: NavLink) {
  return (
    <Link to={path}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export const AppShell: React.FunctionComponent<{
  title: string;
  colorScheme?: "light" | "dark";
  routes: Route[];
  navLinks: NavLink[];
}> = ({ title, colorScheme, routes, navLinks }) => {
  const { movies } = useStore();
  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <MantineAppShell
          padding="md"
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
          header={
            <Header
              height={"70"}
              p="xs"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Title sx={{ flexGrow: 1 }}>{title}</Title>
              <Text>{movies.length} seleccionadas</Text>
            </Header>
          }
          navbar={
            <Navbar width={{ base: 150 }} height={1000} p="xs">
              {navLinks.map((link) => (
                <MainLink {...link} key={link.path} />
              ))}
            </Navbar>
          }
        >
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
