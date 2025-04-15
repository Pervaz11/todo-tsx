import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Todo } from "../types/todo.types";
import StatsChart from "../components/StatsChart";

const Completed = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Completed Todos
        </h2>

        {completedTodos.length === 0 ? (
          <p className="text-center text-gray-600">No completed todos yet.</p>
        ) : (
          <ul className="space-y-6 w-full">
            {completedTodos.map((todo: Todo) => (
              <li
                key={todo.id}
                className="w-full p-6 rounded-2xl shadow-lg border-l-4 transition-all duration-300 bg-green-50 border-green-500 hover:bg-green-100"
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

      <div className="mt-16 w-full">
        <StatsChart />
      </div>
    </div>
  );
};

export default Completed;
