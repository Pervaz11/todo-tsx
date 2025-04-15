import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getTodosFromStorage } from "../utils/localStorage";

const COLORS = ["#00C49F", "#FFBB28"];

const CustomPieChart = () => {
  const todos = getTodosFromStorage();

  const completed = todos.filter((todo) => todo.isCompleted).length;
  const pending = todos.length - completed;

  const data = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];

  return (
    <div className="w-full flex justify-center mt-16">
      <div className="w-full max-w-4xl h-96 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Todo Status Pie Chart
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              label
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomPieChart;
