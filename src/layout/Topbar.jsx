import { useApp } from "../context/AppContext";
import { Sun, Moon } from "lucide-react";

const Topbar = () => {
  //const { role, setRole } = useApp();
  const { role, setRole, darkMode, setDarkMode } = useApp();
  return (
    <div className="flex justify-between items-center p-4 border-b border-slate-700">
      <h2 className="text-lg font-semibold">Finance Dashboard</h2>

      <div className="flex items-center gap-4">
        <div className="relative">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 px-4 py-1.5 pr-8 rounded-lg text-sm font-medium text-slate-900 dark:text-white shadow-sm focus:outline-none"
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>

          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
            ▼
          </span>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:scale-105 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      
      </div>
    </div>
  );
};

export default Topbar;
