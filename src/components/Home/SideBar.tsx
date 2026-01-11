import { NavLink } from "react-router-dom";

const base = "block transition hover:text-lime-500";

const active = "text-lime-500 font-semibold";

export default function SideBar() {
  return (
    <aside className="w-48 bg-gray-950 border-r border-slate-800 text-slate-200 p-4">
      <h2 className="text-2xl font-bold mb-8">Menu</h2>

      <nav>
        <ul className="divide-y divide-slate-800">
          <li className="py-4">
            <NavLink
              to="/home"
              end
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Dashboard
            </NavLink>
          </li>

          <li className="py-4">
            <NavLink
              to="/home/expenses"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Minhas Despesas
            </NavLink>
          </li>

          <li className="py-4">
            <NavLink
              to="/home/cards"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Meus Cartões
            </NavLink>
          </li>

          <li className="py-4">
            <NavLink
              to="/home/settings"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Configurações
            </NavLink>
          </li>

          <li className="py-4">
            <NavLink to="/logout" className={base}>
              Sair
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
