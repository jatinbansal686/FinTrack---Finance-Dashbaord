import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Shopping", value: 300 },
  { name: "Travel", value: 300 },
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b"];

const CustomPieChart = () => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl h-[380px]">
      <h3 className="mb-4 font-semibold text-lg">Spending Breakdown</h3>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart margin={{ top: 10, right: 40, left: 40, bottom: 10 }}>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            innerRadius={50} // 🔥 makes donut chart
            paddingAngle={3} // spacing between slices
            label={({ name, percent }) =>
              `${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
