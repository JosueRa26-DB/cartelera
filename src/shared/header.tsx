import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#050505] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO: Simple y Directo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <div className="h-1 w-6 bg-blue-600 rounded-full"></div>
            <div className="h-1 w-4 bg-white rounded-full"></div>
          </div>
          <span className="text-white font-black text-xl tracking-tighter">
            CINE<span className="text-red-600">PURAViDA</span>
          </span>
        </NavLink>

        <nav className="flex items-center gap-10">
  {/* INICIO - Letra Blanca, Línea Roja */}
  <NavLink
    to="/"
    end
    className={({ isActive }) =>
      `text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 ${
        isActive
          ? "text-white border-b-2 border-[#FF0000] pb-1" 
          : "text-white hover:border-b-2 hover:border-[#FF0000]/50 pb-1"
      }`
    }
  >
    Inicio
  </NavLink>

  {/* CARTELERA - Letra Blanca, Línea Azul */}
  <NavLink
    to="/movies"
    className={({ isActive }) =>
      `text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 ${
        isActive
          ? "text-white border-b-2 border-[#0033CC] pb-1" 
          : "text-white hover:border-b-2 hover:border-[#0033CC]/50 pb-1"
      }`
    }
  >
    Cartelera
  </NavLink>
</nav>
      </div>
    </header>
  );
}
