import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="bg-white shadow px-6 py-4 flex gap-6">
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
  );
}
