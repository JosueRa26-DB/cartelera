import { Link } from "react-router-dom";
import type { Movie } from "../../model/movie.model";

export default function MovieCard(movie: Movie) {
  return (
    <Link to={`/movies/${movie.id}`} className="block no-underline group">
      <article className="w-64 rounded-2xl overflow-hidden bg-gray-900 shadow-lg group-hover:-translate-y-2 group-hover:shadow-purple-900/40 group-hover:shadow-2xl transition-all duration-300 cursor-pointer">

        <div className="w-full aspect-square overflow-hidden relative">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
        </div>

        <div className="px-4 py-3 border-t border-purple-900/40">
          <h2 className="text-white font-extrabold text-base tracking-wide uppercase truncate">
            {movie.title}
          </h2>
          <div className="h-0.5 w-8 bg-purple-500 rounded-full mt-1 mb-2 group-hover:w-16 transition-all duration-300" />
          <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed font-light">
            {movie.description}
          </p>
        </div>

      </article>
    </Link>
  );
}
