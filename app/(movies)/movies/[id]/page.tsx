import { Suspense } from "react";
import MovieInfo, { getMovie } from "@/components/movie/movie-info";
import MovieVideos from "@/components/movie/movie-videos";

interface MovieDetailProps {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: MovieDetailProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title
  };
}

export default async function MovieDetail({
  params: { id }
}: MovieDetailProps) {
  return (
    <>
      <Suspense fallback={<h3>Loading movie info ...</h3>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h3>Loading movie videos ...</h3>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
