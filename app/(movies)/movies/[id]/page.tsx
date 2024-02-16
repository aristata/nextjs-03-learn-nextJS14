import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
  searchParams: { v, page }
}: {
  params: { id: string };
  searchParams: { v: string; page: string };
}) {
  console.log("==============================");
  console.log("fetch 시작");
  // const movie = await getMovie(id);
  // const vidoes = await getVideos(id);
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // console.log(videos);
  console.log("fetch 종료");
  return (
    <>
      <h1>Movie {id}</h1>
      <p>v = {v}</p>
      <p>page = {page}</p>
      <p>{movie.title}</p>
      <p>
        {videos.map((v) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </p>
    </>
  );
}
