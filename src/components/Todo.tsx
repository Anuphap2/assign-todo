import { useState } from "react";
import { useTodoStore } from "../store/Todo";

export default function TodoList() {
  const { todos, removeTodo } = useTodoStore();
  const [selectedTodo, setSelectedTodo] = useState<number | null>(null);

  return (
    <>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 bg-gray-50 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <span className="text-gray-700">{todo.text}</span>
            <button
              onClick={() => setSelectedTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 transition-colors text-white px-3 py-1 rounded-lg"
            >
              ลบ
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {selectedTodo !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background เบลอ */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-white/30"
            onClick={() => setSelectedTodo(null)}
          ></div>

          {/* Card Modal */}
          <div className="relative bg-white rounded-xl shadow-xl max-w-sm w-full p-6 z-10">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              ยืนยันการลบ
            </h2>
            <p className="mb-6 text-gray-600">
              คุณแน่ใจหรือไม่ว่าต้องการลบ "
              {todos.find((t) => t.id === selectedTodo)?.text}"?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedTodo(null)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => {
                  removeTodo(selectedTodo);
                  setSelectedTodo(null);
                }}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                ลบ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
