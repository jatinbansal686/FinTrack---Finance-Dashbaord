const SummaryCard = ({ title, amount, color }) => {
  return (
    <div className="bg-white dark:bg-slate-800 backdrop-blur p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300 border border-slate-700">
      <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      <h2 className={`text-2xl font-bold mt-2 ${color}`}>₹ {amount}</h2>
    </div>
  );
};

export default SummaryCard;
