import { useApp } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useApp();

  // Separate income & expenses
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  // Category-wise expense calculation
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1],
  )[0];

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  let currentMonthExpense = 0;
  let lastMonthExpense = 0;

  transactions.forEach((t) => {
    const date = new Date(t.date);

    if (t.type === "expense") {
      if (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      ) {
        currentMonthExpense += t.amount;
      }

      if (
        date.getMonth() === currentMonth - 1 &&
        date.getFullYear() === currentYear
      ) {
        lastMonthExpense += t.amount;
      }
    }
  });

  // % change
  const change =
    lastMonthExpense === 0
      ? 0
      : ((currentMonthExpense - lastMonthExpense) / lastMonthExpense) * 100;

  const savings = income - expense;

  const sortedCategories = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1],
  );

  const topCategories = sortedCategories.slice(0, 3);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
        Insights
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800/80 backdrop-blur p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300 border border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">Total Income</p>
          <h2 className="text-green-400 text-2xl font-bold">₹ {income}</h2>
        </div>

        <div className="bg-white dark:bg-slate-800/80 backdrop-blur p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300 border border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">Total Expense</p>
          <h2 className="text-red-400 text-2xl font-bold">₹ {expense}</h2>
        </div>

        <div className="bg-white dark:bg-slate-800/80 backdrop-blur p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300 border border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">Transactions</p>
          <h2 className="text-indigo-400 text-2xl font-bold">
            {transactions.length}
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800/80 backdrop-blur p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300 border border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">Savings</p>
          <h2
            className={`text-2xl font-bold ${
              savings >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            ₹ {savings}
          </h2>
        </div>

        {/* Monthly Comparison Card */}
        <div className="bg-white dark:bg-slate-800/80 backdrop-blur p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300 border border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">Monthly Change</p>
          <h2
            className={`text-2xl font-bold ${
              change >= 0 ? "text-red-400" : "text-green-400"
            }`}
          >
            {change.toFixed(1)}%
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Compared to last month
          </p>
        </div>
      </div>

      {/* Insight Message */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl">
        <h3 className="mb-4 font-semibold">Top Spending Categories</h3>

        {topCategories.length > 0 ? (
          topCategories.map(([category, amount], index) => (
            <div
              key={index}
              className="flex justify-between py-1 border-b border-slate-700"
            >
              <span>{category}</span>
              <span>₹ {amount}</span>
            </div>
          ))
        ) : (
          <p className="text-slate-500 dark:text-slate-400">
            No data available
          </p>
        )}
      </div>
    </div>
  );
};

export default Insights;
