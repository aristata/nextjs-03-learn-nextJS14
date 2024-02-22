import Image from "next/image";
import Link from "next/link";
import styles from "./movie.module.css";

interface MovieProps {
  id: string;
  poster_path: string;
  title: string;
}

const Movie = ({ id, poster_path, title }: MovieProps) => {
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;
