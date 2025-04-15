import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const TodoSummaryCard = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);

    const total = todos.length;
    const completed = todos.filter(todo => todo.isCompleted).length;
    const pending = total - completed;
    const completionRate = total ? Math.round((completed / total) * 100) : 0;

    const sortedTodos = [...todos].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    const firstTodo = sortedTodos[0];
    const lastTodo = sortedTodos[sortedTodos.length - 1];

    const today = new Date().toDateString();
    const todaysTodos = todos.filter(todo => new Date(todo.createdAt).toDateString() === today).length;

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-4">Todo Summary</h2>
            <ul className="space-y-2 text-gray-700 text-lg">
                <li>📝 Total Todos: <strong>{total}</strong></li>
                <li>✅ Completed: <strong>{completed}</strong></li>
                <li>🕗 Pending: <strong>{pending}</strong></li>
                <li>📊 Completion Rate: <strong>{completionRate}%</strong></li>
                <li>📅 Today's Todos: <strong>{todaysTodos}</strong></li>
                {firstTodo && (
                    <li>📌 Oldest: <strong>{firstTodo.title}</strong></li>
                )}
                {lastTodo && (
                    <li>🆕 Last Added: <strong>{lastTodo.title}</strong></li>
                )}
                {firstTodo && lastTodo && (
                    <li>🕒 Range: <strong>{new Date(firstTodo.createdAt).toLocaleDateString()} - {new Date(lastTodo.createdAt).toLocaleDateString()}</strong></li>
                )}
            </ul>
        </div>
    );
};

export default TodoSummaryCard;
