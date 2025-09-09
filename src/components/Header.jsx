import { Link, NavLink, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const { pathname } = useLocation();
  const isListPage = pathname === "/" || pathname === "/archives";

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
        <Link to="/" className="text-xl font-semibold">
          Catatan Zidan
        </Link>
        <nav className="ml-auto flex items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded px-3 py-1 text-sm ${
                isActive ? "bg-gray-900 text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Aktif
          </NavLink>
          <NavLink
            to="/archives"
            className={({ isActive }) =>
              `rounded px-3 py-1 text-sm ${
                isActive ? "bg-gray-900 text-white" : "hover:bg-gray-100"
              }`
            }
          >
            Arsip
          </NavLink>
          <NavLink
            to="/notes/new"
            className={({ isActive }) =>
              `rounded px-3 py-1 text-sm ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "bg-gray-900 text-white hover:opacity-90"
              }`
            }
          >
            + Baru
          </NavLink>
        </nav>
      </div>
      {isListPage && (
        <div className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-3">
            <SearchBar />
          </div>
        </div>
      )}
    </header>
  );
}
