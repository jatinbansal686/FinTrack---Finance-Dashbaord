import { useState } from "react";
import { useApp } from "../../context/AppContext";

const AddTransactionModal = ({ onClose }) => {
  const { addTransaction } = useApp();

  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.date || !form.category || !form.amount) {
      alert("Please fill all fields");
      return;
    }

    addTransaction({
      ...form,
      amount: Number(form.amount),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-slate-800 p-6 rounded-2xl w-96">
        <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            className="w-full p-2 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <input
            type="text"
            placeholder="Category"
            className="w-full p-2 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <input
            type="number"
            placeholder="Amount"
            className="w-full p-2 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600"
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />

          <select
            className="w-full p-2 rounded bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600"
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1.5 rounded-lg transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-1.5 rounded-lg transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
