import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <NavLink to="/" className="text-white font-black text-xl tracking-tight">
          Cine<span className="text-purple-400">Colochas</span>
        </NavLink>

        <nav className="flex items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "text-white bg-purple-600/20 border border-purple-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "text-white bg-purple-600/20 border border-purple-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
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