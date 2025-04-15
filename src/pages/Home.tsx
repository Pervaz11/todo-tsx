import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { deleteTodo, toggleTodo } from "../features/todos/todosSlice";
import { Todo } from "../types/todo.types";
import { useState } from "react";
import TodoCard from "../components/TodoCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const filteredTodos = todos.filter((todo) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      todo.title?.toLowerCase().includes(lowerSearch) ||
      todo.description?.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl space-y-6 flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-center">My Todos</h1>

        <input
          type="text"
          placeholder="🔍 Axtar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
        />

        {filteredTodos.length === 0 && todos.length > 0 && (
          <p className="text-center text-gray-500">Uyğun todo tapılmadı.</p>
        )}
        {todos.length === 0 && (
          <p className="text-center text-gray-500">Heç bir todo yoxdur. Əlavə et!</p>
        )}

        <ul className="space-y-8 w-full">
          {filteredTodos.map((todo: Todo, index) => (
            <li
              key={todo.id}
              className={`w-full p-6 rounded-2xl shadow-lg border-l-4 transition-all duration-300 ${todo.isCompleted
                ? "bg-green-50 border-green-500 hover:bg-green-100"
                : "bg-yellow-50 border-yellow-500 hover:bg-yellow-100"
                }`}
            >
              <div className="flex justify-between items-start gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {index + 1}. {todo.title}
                  </h3>
                  {todo.description && (
                    <p className="text-gray-700 mt-2 text-lg">{todo.description}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-3">
                    🕒 {todo.createdAt ? new Date(todo.createdAt).toLocaleString() : "Unknown"}
                  </p>
                </div>

                <div className="flex flex-col gap-4 items-end">
                  <button
                    onClick={() => handleToggle(todo.id)}
                    className="font-bold border-2 border-black px-6 py-3 rounded-lg transition duration-300 hover:border-[chocolate] hover:text-[chocolate]"
                  >
                    {todo.isCompleted ? "Mark as Pending" : "Mark as Completed"}
                  </button>

                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="text-red-600 text-xl font-bold hover:text-red-800 transition"
                    title="Sil"
                  >
                    ✖
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <TodoCard />
    </div>
  );
};

export default Home;
