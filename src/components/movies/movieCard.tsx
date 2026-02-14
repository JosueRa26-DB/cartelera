import { Link } from "react-router-dom";
import type { Movie } from "../../model/movie.model";

export default function MovieCard(movie: Movie) {
  return (
    <Link to={`/movies/${movie.id}`} className="block no-underline group w-full">
      <article className="relative w-full rounded-xl overflow-hidden bg-[#111] border border-white/5 shadow-lg group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(255,0,0,0.2)] transition-all duration-500 cursor-pointer">
        
        {/* Contenedor de Imagen: Formato Póster Cine (2:3) */}
        <div className="w-full aspect-[2/3] overflow-hidden relative">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay de degradado para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
          
          {/* Badge sutil de calidad o estreno (Opcional) */}
          <div className="absolute top-3 right-3 px-2 py-1 bg-blue-600/80 backdrop-blur-md rounded text-[10px] font-black text-white uppercase tracking-tighter">
            HD
          </div>
        </div>

        {/* Info de la Película */}
        <div className="px-4 py-4 bg-[#0a0a0a]">
          <h2 className="text-white font-black text-sm tracking-tight uppercase truncate">
            {movie.title}
          </h2>
          
          {/* Línea decorativa que cambia de Azul a Rojo al hacer hover */}
          <div className="h-1 w-6 bg-[#0033CC] rounded-full mt-2 mb-3 group-hover:w-12 group-hover:bg-[#FF0000] transition-all duration-500" />
          
          <p className="text-white/50 text-[11px] line-clamp-2 leading-snug font-medium group-hover:text-white/80 transition-colors">
            {movie.description}
          </p>
        </div>

        {/* Borde inferior brillante Costa Rica (Solo visible en Hover) */}
        <div className="absolute bottom-0 left-0 w-full h-1 flex opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex-1 bg-[#0033CC]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#FF0000]"></div>
        </div>
      </article>
    </Link>
  );
}