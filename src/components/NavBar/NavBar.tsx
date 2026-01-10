import { BookOpen, House } from "lucide-react";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <nav className="w-full h-16 bg-gray-950 flex items-center px-8">
      <h1 className="text-white text-2xl font-bold">BaggIns</h1>
      <ul className="ml-8 flex space-x-4">
        <li>
          <NavItem to="/home" icon={House} label="Home" />
        </li>
        <li>
          <NavItem to="/about" icon={BookOpen} label="About" />
        </li>
      </ul>
    </nav>
  );
}