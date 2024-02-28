"use client";

import Link from "next/link";
import styles from "./movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
  id: string;
  poster_path: string;
  title: string;
}

const Movie = ({ id, poster_path, title }: MovieProps) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClickHandler} />
      <Link prefetch={true} href={`/movies/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;
