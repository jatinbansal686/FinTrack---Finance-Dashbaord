import SummaryCard from "../components/dashboard/SummaryCard";
import CustomLineChart from "../components/dashboard/LineChart";
import CustomPieChart from "../components/dashboard/PieChart";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Balance"
          amount="45,000"
          color="text-indigo-400"
        />
        <SummaryCard title="Income" amount="60,000" color="text-green-400" />
        <SummaryCard title="Expenses" amount="15,000" color="text-red-400" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomLineChart />
        <CustomPieChart />
      </div>
    </div>
  );
};

export default Dashboard;
