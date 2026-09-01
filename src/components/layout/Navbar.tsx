import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/schedule", label: "Schedule" },
  { to: "/recycling", label: "Recycling Map" },
  { to: "/tracker", label: "Tracker" },
];

export function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-sm flex items-center justify-between">
      <span className="text-xl font-bold text-green-700">EcoTrack</span>
      <div className="flex gap-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-sm font-medium ${
                isActive ? "text-green-700" : "text-gray-500 hover:text-gray-800"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}