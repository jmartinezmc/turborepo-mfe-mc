import React from "react";
import { AppShell } from "ui";
import { MoviesContent } from "movies-content";
import { PlaylistContent } from "playlist-content";

function App() {
  return (
    <AppShell
      title="Turborepo - Module Federation - MC (Playlist)"
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: MoviesContent,
        },
        {
          path: "/playlist",
          element: PlaylistContent,
        },
        {
          path: "/app-two",
          element: () => <div>App 2</div>,
        },
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Playlist",
          path: "/playlist",
        },
        {
          label: "App 2",
          path: "/app-two",
        },
      ]}
    />
  );
}

export default App;
