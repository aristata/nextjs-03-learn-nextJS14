import style from "./movie-info.module.css";
import Link from "next/link";
import HomeIcon from "../icons/HomeIcon";
import FilmIcon from "../icons/FilmIcon";
import { API_URL } from "@/apis/API_URL";

export async function getMovie(id: string) {
  // console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <>
      <div className={style.container}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className={style.poster}
        />
        <div className={style.info}>
          <h1 className={style.title}>{movie.title}</h1>
          <h3>👍 {movie.vote_average.toFixed()}</h3>
          <p>{movie.overview}</p>
          <div className={style.links}>
            <div className={style.link}>
              <HomeIcon w={20} h={20} />
              <a href={movie.homepage} target={"_blank"}>
                Homepage
              </a>
            </div>
            <div className={style.link}>
              <FilmIcon />
              <Link href={`/movies/${id}/credits`}>Credits</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
