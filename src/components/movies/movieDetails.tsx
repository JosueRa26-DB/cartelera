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
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#050505]">
        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-[#FF0000] border-r-transparent"></div>
        <p className="text-white/30 text-lg font-bold mt-4 uppercase tracking-widest">Sincronizando...</p>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="w-full min-h-screen pt-24 md:pt-32 pb-20 bg-[#050505] overflow-x-hidden relative">
      
      {/* SECCIÓN CABECERA (Siguiendo el estilo de MovieList) */}
      <div className="w-full mb-12 md:mb-16 px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-1.5 mb-6">
            <div className="h-1.5 w-8 bg-[#0033CC] rounded-full shadow-[0_0_15px_rgba(0,51,204,0.3)]"></div>
            <div className="h-1.5 w-12 bg-[#FF0000] rounded-full shadow-[0_0_15px_rgba(255,0,0,0.3)]"></div>
            <div className="h-1.5 w-8 bg-[#0033CC] rounded-full shadow-[0_0_15px_rgba(0,51,204,0.3)]"></div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none italic">
            {movie.title} <span className="text-[#FF0000]">CR</span>
          </h1>
          
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6"></div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL: Layout Ordenado */}
      <div className="w-full px-4 sm:px-10 md:px-16 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* PÓSTER (Usando el mismo estilo de MovieCard) */}
          <div className="w-full max-w-[320px] shrink-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full aspect-[2/3] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-1.5 flex">
                <div className="flex-1 bg-[#0033CC]"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-[#FF0000]"></div>
              </div>
            </div>
          </div>

          {/* DETALLES */}
          <div className="flex-1 flex flex-col gap-8">
            <p className="text-white/70 text-lg md:text-xl leading-relaxed italic font-medium">
              "{movie.description}"
            </p>

            {/* INFO GRID (Ordenado como las cartas) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Duración", val: movie.duration, color: "border-[#0033CC]" },
                { label: "Cine", val: movie.cinema, color: "border-white/20" },
                { label: "Horarios", val: movie.showtimes, color: "border-[#FF0000]" },
                { label: "Disponibilidad", val: `${movie.availableSeats} asientos`, color: "border-white/20" }
              ].map((item, i) => (
                <div key={i} className={`bg-white/5 border-l-4 ${item.color} p-5 rounded-r-xl backdrop-blur-sm`}>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                  <p className="text-white font-bold text-lg italic">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marca de Agua (Misma que MovieList) */}
      <div className="fixed -right-20 bottom-10 rotate-90 opacity-[0.02] pointer-events-none">
        <span className="text-white text-[15rem] font-black leading-none uppercase">PuraVida</span>
      </div>

      {/* Fondo decorativo sutil para evitar cortes visuales */}
      <div className="fixed inset-0 bg-[#050505] -z-10"></div>
    </div>
  );
}