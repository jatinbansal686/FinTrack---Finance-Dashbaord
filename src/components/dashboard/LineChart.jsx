import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", balance: 20000 },
  { month: "Feb", balance: 30000 },
  { month: "Mar", balance: 25000 },
  { month: "Apr", balance: 40000 },
];

const CustomLineChart = () => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl h-[380px]">
      <h3 className="mb-4 font-semibold text-lg">Balance Trend</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#6366f1" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
