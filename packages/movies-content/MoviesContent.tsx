import React from "react";
import { Grid } from "@mantine/core";
import { MovieCard } from "card";

const movies = [
  {
    title: "Avengers: Endgame",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    title: "Avengers: Infinity War",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  },
  {
    title: "Doctor Strange",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
  },
  {
    title: "Shang-Chi",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
  },
  {
    title: "Captain America: Civil War",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
  },
  {
    title: "Iron Man",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
  },
  {
    title: "Iron Man 3",
    image:
      "https://www.themoviedb.org/t/p/w440_and_h660_face/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
  },
];
const MoviesContent = () => (
  <Grid sx={{ gap: "1rem" }}>
    {movies.map((movie) => (
      <MovieCard {...movie} key={movie.title} showAddButton></MovieCard>
    ))}
  </Grid>
);
export default MoviesContent;
