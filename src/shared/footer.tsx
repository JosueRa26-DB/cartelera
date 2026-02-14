export function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-zinc-900 py-12 px-6 overflow-hidden">
      {/* Glow sutil en las esquinas para mantener la atmósfera */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Logo en miniatura con los colores nacionales */}
        <div className="flex items-center gap-2 mb-6 group cursor-default">
          <div className="h-1 w-6 bg-blue-600 rounded-full transition-all group-hover:w-8"></div>
          <span className="text-white font-black tracking-tighter text-lg">
            CINE<span className="text-zinc-500">PURAViDA</span>
          </span>
          <div className="h-1 w-6 bg-red-600 rounded-full transition-all group-hover:w-8"></div>
        </div>

        {/* Sección de "Créditos" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-y border-zinc-900/50 py-8 mb-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Producido por</h4>
            <p className="text-zinc-300 font-medium hover:text-white transition-colors">Josue Ramirez Cespedes</p>
          </div>
          <div className="space-y-2 text-center">
            <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Ubicación</h4>
            <p className="text-zinc-300 font-medium">Alajuela, Costa Rica 🇨🇷</p>
          </div>
          <div className="space-y-2 text-center md:text-right">
            <h4 className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Tecnología</h4>
            <p className="text-zinc-300 font-medium">React & Tailwind Ultra HD</p>
          </div>
        </div>

        {/* Copyright final estilo legal de cine */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
            © 2026 CinePuraVida Entertainment. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-6">
            <span className="text-[10px] text-zinc-500 hover:text-red-500 cursor-pointer transition-colors uppercase tracking-widest">Términos</span>
            <span className="text-[10px] text-zinc-500 hover:text-blue-500 cursor-pointer transition-colors uppercase tracking-widest">Privacidad</span>
          </div>
        </div>

        {/* Línea final decorativa (Bandera sutil) */}
        <div className="mt-8 flex h-[2px] w-32 rounded-full overflow-hidden opacity-30">
          <div className="flex-1 bg-blue-600"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-red-600"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-blue-600"></div>
        </div>
      </div>
    </footer>
  );
}