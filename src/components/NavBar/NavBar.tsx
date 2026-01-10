import {
  BookOpen,
  CircleDollarSign,
  CircleUserRound,
  House,
} from "lucide-react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navItems = [
    { to: "/home", icon: House, label: "Home" },
    { to: "/about", icon: BookOpen, label: "About" },
  ];

  return (
    <nav className="w-full h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <CircleDollarSign className="w-8 h-8 text-lime-500" />
        <span className="text-xl font-bold text-white">BaggIns</span>
      </div>
      <ul className="flex space-x-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <li key={to}>
            <NavItem to={to} icon={Icon} label={label} />
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <NavItem to="/login" icon={CircleUserRound} label="Login" />
        <NavLink
          to="/signup"
          className="flex items-center bg-lime-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Cadastre-se
        </NavLink>
      </div>
    </nav>
  );
}
