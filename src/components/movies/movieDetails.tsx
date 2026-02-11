import { useParams } from "react-router-dom";
import type { Movie } from "../../model/movie.model";
import { getMovieById } from "../../services/movies.services";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getMovieById(id).then((movie) => setMovie(movie)).finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="w-screen min-h-screen flex items-center justify-center text-white">
        <p className="text-xl animate-pulse">Cargando película...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="w-screen min-h-screen flex items-center justify-center text-white">
        <p className="text-red-400 text-xl">Película no encontrada</p>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen pt-20 pb-12 px-4 text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">

        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-64 h-auto rounded-xl object-cover shadow-2xl self-start"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-300 leading-relaxed">{movie.description}</p>

          <div className="flex flex-col gap-2 mt-4">
            <h4 className="text-lg font-semibold text-gray-100">
              🕐 Duración: <span className="font-normal text-gray-300">{movie.duration}</span>
            </h4>
            <h4 className="text-lg font-semibold text-gray-100">
              🎬 Cine: <span className="font-normal text-gray-300">{movie.cinema}</span>
            </h4>
            <h4 className="text-lg font-semibold text-gray-100">
              🕑 Horarios: <span className="font-normal text-gray-300">{movie.showtimes}</span>
            </h4>
            <h4 className="text-lg font-semibold text-gray-100">
              💺 Cupos disponibles: <span className="font-normal text-gray-300">{movie.availableSeats}</span>
            </h4>
          </div>
        </div>

      </div>
    </div>
  );
}