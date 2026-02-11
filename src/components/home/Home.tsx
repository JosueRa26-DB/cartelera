import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen flex flex-col items-center pt-40 px-6 text-center">

      <div className="w-full max-w-4xl">
        <div className="text-6xl md:text-8xl font-black text-white leading-none">
          Bienvenido a <div className="text-purple-400">CineColochas</div>
        </div>

        <div className="mt-6 text-xl md:text-2xl text-gray-300 font-medium">
          Tu portal favorito para el mejor contenido cinematográfico.
        </div>

        <div className="mt-10 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>

        <button
          onClick={() => navigate("/movies")}
          className="mt-12 px-8 py-4 bg-purple-600 hover:bg-purple-500 active:scale-95 text-white text-lg font-bold rounded-2xl shadow-lg shadow-purple-900/50 transition-all duration-200"
        >
          🎬 Ver Cartelera
        </button>
      </div>

    </div>
  );
}
