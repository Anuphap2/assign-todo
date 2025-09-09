import "./App.css";
import AddTodo from "./components/Add";
import TodoList from "./components/Todo";
import DeleteButton from "./components/Del";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border rounded-2xl shadow-lg p-6 sm:max-w-lg md:max-w-2xl transition-transform transform">
        {/* Header */}
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">
          Todo List
        </h1>

        {/* Add Todo */}
        <div className="mb-6">
          <AddTodo />
        </div>

        {/* Todo List */}
        <div className="mt-4">
          <TodoList />
        </div>

        {/* Delete Modal */}
        <DeleteButton />
      </div>
    </div>
  );
}
