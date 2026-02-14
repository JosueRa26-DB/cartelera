import type { Movie } from "../../model/movie.model";
import MovieCard from "./movieCard";

export function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="w-full min-h-screen pt-24 md:pt-32 pb-20 bg-[#050505] overflow-x-hidden">
      
      {/* Cabecera Centrada */}
      <div className="w-full mb-12 md:mb-20 px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-1.5 mb-6">
            <div className="h-1.5 w-8 bg-[#0033CC] rounded-full shadow-[0_0_15px_rgba(0,51,204,0.3)]"></div>
            <div className="h-1.5 w-12 bg-[#FF0000] rounded-full shadow-[0_0_15px_rgba(255,0,0,0.3)]"></div>
            <div className="h-1.5 w-8 bg-[#0033CC] rounded-full shadow-[0_0_15px_rgba(0,51,204,0.3)]"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none italic">
            Cartelera <span className="text-[#FF0000]">CR</span>
          </h1>
          
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-6"></div>
        </div>
      </div>

      {/* Grid Ultra Ordenado 
          - items-stretch: asegura que todas las cartas intenten medir lo mismo
          - justify-items-center: centra las cartas en su columna
      */}
      <div className="w-full px-4 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-12">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div 
                key={movie.id} 
                className="w-full flex justify-center"
              >
                {/* Contenedor con ancho fijo opcional para evitar estiramientos raros */}
                <div className="w-full max-w-[240px]">
                  <MovieCard {...movie} />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-[#FF0000] border-r-transparent"></div>
              <p className="text-white/30 text-lg font-bold mt-4 uppercase tracking-widest">
                Cargando Cartelera...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Marca de Agua */}
      <div className="fixed -left-20 bottom-10 -rotate-90 opacity-[0.02] pointer-events-none">
        <span className="text-white text-[15rem] font-black leading-none">CINE</span>
      </div>
    </div>
  );
}