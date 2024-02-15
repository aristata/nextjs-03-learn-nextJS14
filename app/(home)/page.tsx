import { Metadata } from "next";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata: Metadata = {
  title: "Home"
};

async function getMovies() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Hello!</h1>
      {JSON.stringify(movies)}
    </div>
  );
}
