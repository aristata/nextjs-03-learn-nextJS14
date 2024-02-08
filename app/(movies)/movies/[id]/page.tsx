export default function MovieDetail({
  params: { id },
  searchParams: { v, page }
}: {
  params: { id: string };
  searchParams: { v: string; page: string };
}) {
  return (
    <>
      <h1>Movie {id}</h1>
      <p>v = {v}</p>
      <p>page = {page}</p>
    </>
  );
}
