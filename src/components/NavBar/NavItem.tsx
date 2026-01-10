import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function NavItem({
  to,
  icon,
  label,
}: {
  to: string;
  icon: LucideIcon;
  label: string;
}) {
  const Icon = icon;
  const linkBase =
    "relative inline-flex h-12 items-center gap-4 rounded-md px-4 text-base font-semibold leading-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white/0 group";
  const linkInactive = "text-gray-500 hover:text-gray-300 hover:bg-black/5";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [linkBase, isActive ? "text-white" : linkInactive].join(" ")
      }
    >
      <Icon className="w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
      <span
        className="
            relative inline-block whitespace-nowrap
            after:absolute after:left-0 after:right-0 after:bottom-[-3px]
            after:h-[3px] after:rounded-full after:bg-current
            after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform
          "
      >
        {label}
      </span>
    </NavLink>
  );
}
