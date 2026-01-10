import { BookOpen, CircleDollarSign, CircleUserRound, House } from "lucide-react";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="w-full h-16 bg-gray-950 flex items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <CircleDollarSign className="w-8 h-8 text-lime-500" />
          <span className="text-xl font-bold text-white">BaggIns</span>
        </div>
        <ul className="ml-8 flex space-x-4">
          <li>
            <NavItem to="/home" icon={House} label="Home" />
          </li>
          <li>
            <NavItem to="/about" icon={BookOpen} label="About" />
          </li>
        </ul>
        <div className="flex">
          <NavItem to="/login" icon={CircleUserRound} label="Login" />
          <NavLink to="/signup" className="flex items-center bg-lime-600 hover:bg-green-700 text-white px-4 rounded-lg font-semibold transition">
            Cadastre-se
          </NavLink>
        </div>
      </nav>
    </>
  );
}