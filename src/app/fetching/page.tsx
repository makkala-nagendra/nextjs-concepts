import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";

async function getMovies(): Promise<Movie[]> {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store",
  });
  return res.json();
}

export default async function FetchingPage() {
  const movies = await getMovies();
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Movies List</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
} 