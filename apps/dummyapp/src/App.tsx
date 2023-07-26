import React, { Suspense, lazy } from "react";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
// @ts-ignore
import MoviesApp from "movies/MoviesApp";
// @ts-ignore
// import PlaylistApp from "playlist/PlaylistApp";
import "./App.css";
// @ts-ignore
const PlaylistApp = lazy(() => import("playlist/PlaylistApp"));

function App() {
  const routes = [
    {
      path: "/",
      element: () => <div>Content</div>,
    },
    {
      path: "/movies",
      element: MoviesApp,
    },
    {
      path: "/playlist",
      element: PlaylistApp,
    },
  ];

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Movies",
      path: "/movies",
    },
    {
      label: "Playlist",
      path: "/playlist",
    },
  ];
  return (
    <BrowserRouter>
      <div className="container-nav">
        {navLinks.map((link) => (
          <Link to={link.path} key={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="containter-content-app">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<div>Page is Loading...</div>}>
                  <route.element></route.element>
                </Suspense>
              }
            />
          ))}
        </Routes>
        <Outlet />
      </div>
    </BrowserRouter>
  );
}

export default App;
