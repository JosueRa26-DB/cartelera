import type { Movie } from "../../model/movie.model";
import MovieCard from "./MovieCard";

export  function MovieList({movies}: {movies: Movie[]}) {

  return (
    <div className="w-screen min-h-screen pt-20 pb-12 px-4">
      <h1 className="text-5xl font-bold text-center text-white mb-12">
        Cartelera
      </h1>
        
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}