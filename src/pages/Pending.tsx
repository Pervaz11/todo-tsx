import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Todo } from "../types/todo.types";
import CustomPieChart from "../components/PieChart";

const Pending = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const pendingTodos = todos.filter((todo) => !todo.isCompleted);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">
          Pending Todos
        </h2>

        {pendingTodos.length === 0 ? (
          <p className="text-center text-gray-600">No pending todos. Well done!</p>
        ) : (
          <ul className="space-y-6 w-full">
            {pendingTodos.map((todo: Todo) => (
              <li
                key={todo.id}
                className="w-full p-6 rounded-2xl shadow-lg border-l-4 transition-all duration-300 bg-yellow-50 border-yellow-500 hover:bg-yellow-100"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{todo.title}</h3>
                  {todo.description && (
                    <p className="text-gray-700 mt-2 text-lg">{todo.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
        <CustomPieChart />
    </div>
  );
};

export default Pending;
