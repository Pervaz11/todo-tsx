import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const StatsChart = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);

    const completed = todos.filter((todo) => todo.isCompleted).length;
    const pending = todos.length - completed;

    const data = [
        { name: "Completed", value: completed },
        { name: "Pending", value: pending },
    ];

    return (
        <div className="w-full flex justify-center mt-16">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl px-8 py-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Todo Stats Chart
                </h2>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="4 4" />
                            <XAxis dataKey="name" tick={{ fontSize: 14 }} />
                            <YAxis allowDecimals={false} tick={{ fontSize: 14 }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#22c55e" radius={[8, 8, 0, 0]} barSize={50} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default StatsChart;
