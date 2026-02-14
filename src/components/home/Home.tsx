import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    // FONDO: Azul Real Profundo (Cero morado). 
    // Usamos un gradiente desde un azul medianoche hasta un azul cobalto en el centro.
    <div className="w-screen min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#000814] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#001d3d] via-[#000814] to-black overflow-hidden relative">
      
      {/* Reflejos de luz Azul Eléctrico en las esquinas */}
      <div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -right-20 bottom-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl">
        
        {/* Badge superior con azul sólido */}
        <div className="mb-6">
          <span className="inline-block px-5 py-1.5 border-2 border-blue-600 bg-blue-600/10 rounded-full text-blue-400 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs backdrop-blur-md">
            Cine 100% Costarricense 🇨🇷
          </span>
        </div>

        {/* Título con la paleta oficial: Azul, Blanco y Rojo */}
        <h1 className="text-6xl md:text-9xl font-black leading-[0.8] tracking-tighter">
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">CINE</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056b3] via-white to-[#d90429]">
            PURAViDA
          </span>
        </h1>

        {/* Frase principal con azul claro para legibilidad */}
        <p className="mt-10 text-xl md:text-3xl text-blue-100 font-bold max-w-3xl mx-auto italic">
          "Las historias que nos mueven, <br className="hidden md:block" /> con la pasión de nuestra gente."
        </p>

        <p className="mt-4 text-blue-300/60 text-base md:text-lg max-w-xl mx-auto font-medium">
          Tu butaca está lista. Disfrutá de la mejor cartelera digital del país.
        </p>

        {/* BOTÓN ROJO POTENTE: Destaca brutalmente sobre el azul */}
        <div className="mt-16">
          <button
            onClick={() => navigate("/movies")}
            className="group relative px-16 py-6 bg-[#d90429] text-white text-2xl font-black uppercase tracking-[0.2em] rounded-2xl 
                       transition-all duration-300 
                       hover:bg-[#ef233c] hover:scale-110
                       active:scale-95
                       shadow-[0_15px_60px_-10px_rgba(217,4,41,0.5)] 
                       border-b-8 border-[#8d0801]"
          >
            <span className="flex items-center gap-4 relative z-10">
              ¡VER CARTELERA!
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
          
          {/* Detalles técnicos bajo el botón */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="h-[1px] w-10 bg-blue-900"></div>
            <p className="text-blue-500 font-black text-[10px] tracking-[0.4em] uppercase">
              HD Streaming • Sin Anuncios
            </p>
            <div className="h-[1px] w-10 bg-blue-900"></div>
          </div>
        </div>

      </div>

      {/* Viñeta cinematográfica (bordes oscuros) */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
    </div>
  );
}