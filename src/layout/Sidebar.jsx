import { NavLink } from "react-router-dom";
import { LayoutDashboard, Receipt, Lightbulb } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white dark:bg-slate-800 p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-10 text-slate-900 dark:text-white">
        FinTrack
      </h1>

      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg ${
              isActive
                ? "bg-indigo-500/20 text-indigo-400"
                : "hover:text-indigo-400"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg ${
              isActive
                ? "bg-indigo-500/20 text-indigo-400"
                : "hover:text-indigo-400"
            }`
          }
        >
          <Receipt size={20} />
          Transactions
        </NavLink>

        <NavLink
          to="/insights"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg ${
              isActive
                ? "bg-indigo-500/20 text-indigo-400"
                : "hover:text-indigo-400"
            }`
          }
        >
          <Lightbulb size={20} />
          Insights
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
