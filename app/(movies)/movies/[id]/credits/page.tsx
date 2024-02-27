import getCredits from "@/apis/getCredits";
import style from "@/components/movie/movie-credit.module.css";
import Link from "next/link";

export default async function CreditPage({ params: { id } }) {
  const credits = await getCredits(id);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Credits</h1>
      <Link href={`/movies/${id}`}>👈 돌아가기</Link>
      <div className={style.creditsGrid}>
        {credits.map((credit) => (
          <div key={credit.id} className={style.item}>
            <img src={credit.profile_path}></img>
            <div className={style.infos}>
              <div>
                <h1>{credit.character}</h1>
              </div>
              <div>
                <h3>{credit.name}</h3>
              </div>
              <div>
                <label htmlFor="popularity">Popularity</label>
                <h3 id="popularity">{credit.popularity}</h3>
              </div>
            </div>
          </div>
        ))}
        L
      </div>
    </div>
  );
}
