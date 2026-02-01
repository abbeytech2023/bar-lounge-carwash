import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <span className="text-2xl">🍸🚗</span>
          <span className="font-bold text-lg">BarTrack</span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/sales" className={linkClass}>
            Sales
          </NavLink>
          <NavLink to="/expenses" className={linkClass}>
            Expenses
          </NavLink>
          <NavLink to="/reports" className={linkClass}>
            Reports
          </NavLink>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <nav className="md:hidden border-t bg-white px-6 py-4 flex flex-col gap-4">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/sales"
            className={linkClass}
          >
            Sales
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/expenses"
            className={linkClass}
          >
            Expenses
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/reports"
            className={linkClass}
          >
            Reports
          </NavLink>
        </nav>
      )}
    </header>
  );
}
