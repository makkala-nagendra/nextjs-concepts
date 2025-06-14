import { Movie } from "@/types/movie";
import MovieCard from "@/components/MovieCard";

async function getMovies(search: string | null, page: number): Promise<Movie[]> {
  const res = await fetch(`http://localhost:3000/api/movies?search=${search || ""}&page=${page}`, { cache: "no-store" });
  return res.json();
}

export default async function SearchPaginationPage({ searchParams }: { searchParams: { search?: string; page?: string } }) {
  const search = searchParams.search ?? "";
  const page = parseInt(searchParams.page ?? "1");
  const movies = await getMovies(search, page);

  return (
    <div className="p-4 space-y-4">
      <form>
        <input type="text" name="search" placeholder="Search..." defaultValue={search} className="border p-2" />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-3 py-1">Search</button>
      </form>
      {movies.map((m) => <MovieCard key={m.id} {...m} />)}
      <div className="space-x-2">
        <a href={`?search=${search}&page=${page - 1}`} className="underline">Prev</a>
        <a href={`?search=${search}&page=${page + 1}`} className="underline">Next</a>
      </div>
    </div>
  );
}