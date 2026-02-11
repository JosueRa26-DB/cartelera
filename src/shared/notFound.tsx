import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-950">

      <div className="relative mb-6">
        <p className="text-[12rem] font-black text-gray-800 leading-none select-none">
          404
        </p>
        <p className="absolute inset-0 flex items-center justify-center text-[12rem] font-black text-purple-600 opacity-20 blur-sm leading-none select-none">
          404
        </p>
      </div>

      <div className="mb-2">
        <span className="text-purple-400 text-sm font-bold uppercase tracking-widest">
          Error 404
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Página no encontrada
      </h1>

      <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
        La página que buscas no existe o fue removida. Regresa a la cartelera y encuentra tu próxima película.
      </p>

      <div className="h-0.5 w-16 bg-purple-600 rounded-full mb-10" />

      <button
        onClick={() => navigate("/movies")}
        className="group px-8 py-4 bg-purple-600 hover:bg-purple-500 active:scale-95 text-white text-lg font-bold rounded-2xl shadow-lg shadow-purple-900/50 transition-all duration-200 flex items-center gap-3"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
        Volver a la Cartelera
      </button>

    </div>
  );
}