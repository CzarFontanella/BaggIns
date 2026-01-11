import {
  BookOpen,
  CircleDollarSign,
  CircleUserRound,
  House,
} from "lucide-react";
import NavItem from "./NavItem";

export default function NavBar() {
  const navItems = [
    { to: "/home", icon: House, label: "Ínicio" },
    { to: "/about", icon: BookOpen, label: "Sobre" },
  ];

  return (
    <nav className="w-full h-16 flex items-center justify-between px-12">
      <div className="flex items-center gap-2">
        <CircleDollarSign className="w-8 h-8 text-lime-500" />
        <span className="text-xl font-bold text-white">BaggIns</span>
      </div>
      <ul className="flex space-x-4 absolute left-1/2 -translate-x-1/2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <li key={to}>
            <NavItem to={to} icon={Icon} label={label} />
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <NavItem to="/login" icon={CircleUserRound} label="Login" />
      </div>
    </nav>
  );
}
