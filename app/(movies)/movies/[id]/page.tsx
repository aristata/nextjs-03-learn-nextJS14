import { Suspense } from "react";
import MovieInfo from "@/components/movie/movie-info";
import MovieVideos from "@/components/movie/movie-videos";

export default async function MovieDetail({
  params: { id }
}: {
  params: { id: string };
}) {
  return (
    <>
      <h3>Movie detail page : {id}</h3>
      <Suspense fallback={<h3>Loading movie info ...</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading movie videos ...</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
