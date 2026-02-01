import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.svg" // use if you have an image logo

export default function Header() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* LOGO */}
      <NavLink to="/" className="flex items-center gap-3">
        {/* Emoji logo (simple & clean) */}
        <span className="text-2xl">🍸🚗</span>

        {/* Image logo (optional) */}
        {/* <img src={logo} alt="Logo" className="h-8 w-8" /> */}

        <span className="font-bold text-lg text-gray-800">
          Lazelle Bar and Lounge
        </span>
      </NavLink>

      {/* NAVIGATION */}
      <nav className="flex gap-6">
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
    </header>
  );
}
