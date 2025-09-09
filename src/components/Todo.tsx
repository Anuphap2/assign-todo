import { useTodoStore } from "../store/Todo";

export default function TodoList() {
  const { todos, openDeleteModal } = useTodoStore();

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-3 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition"
        >
          <span className="text-gray-700">{todo.text}</span>
          <button
            onClick={() => openDeleteModal(todo.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
          >
            ลบ
          </button>
        </li>
      ))}
    </ul>
  );
}
