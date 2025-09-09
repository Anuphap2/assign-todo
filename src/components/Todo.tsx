import { useTodoStore } from "../store/Todo";

export default function TodoList() {
  const { todos, openDeleteModal } = useTodoStore();

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="
        flex justify-between items-center p-4 
        bg-white border border-gray-200 rounded-xl 
        shadow-sm hover:shadow-lg transform hover:-translate-y-1 
        transition-all duration-300 ease-in-out
      "
        >
          <span className="text-gray-800 font-medium text-lg break-words">
            {todo.text}
          </span>

          <button
            onClick={() => openDeleteModal(todo.id)}
            className="
          bg-red-500 hover:bg-red-600 active:bg-red-700 
          text-white px-4 py-2 rounded-lg 
          shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
        "
          >
            ลบ
          </button>
        </li>
      ))}
    </ul>
  );
}
