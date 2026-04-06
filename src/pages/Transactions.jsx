import { useState } from "react";
import { transactions as initialData } from "../utils/mockData";
import { useApp } from "../context/AppContext";
import AddTransactionModal from "../components/transactions/AddTransactionModal";

const Transactions = () => {
  //const [data, setData] = useState(initialData);
  const { transactions } = useApp();
  const { role } = useApp();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  // Filter + Search logic
  const filteredData = transactions.filter((item) => {
    const matchesSearch = item.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "all" ? true : item.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {role === "admin" && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1.5 rounded-lg transition"
        >
          + Add
        </button>
      )}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Transactions
        </h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded bg-white dark:bg-slate-800 border border-slate-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-3 py-1 rounded bg-white dark:bg-slate-800 border border-slate-600"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>
      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4">
        {filteredData.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No transactions yet
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Start by adding your first transaction 🚀
            </p>
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-500 dark:text-slate-400 border-b border-slate-600">
                <th className="p-2">Date</th>
                <th className="p-2">Category</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Type</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-700 hover:bg-slate-700/50 transition duration-200"
                >
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">{item.category}</td>
                  <td className="p-2">₹ {item.amount}</td>
                  <td
                    className={`p-2 ${
                      item.type === "income" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {showModal && <AddTransactionModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Transactions;
