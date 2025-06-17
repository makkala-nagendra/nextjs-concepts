'use client';

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie";

export default function ClientFetchingPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Client-side Fetching</h1>
      {loading ? <p>Loading...</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
}