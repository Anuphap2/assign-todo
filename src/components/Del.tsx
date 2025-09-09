import { useTodoStore } from "../store/Todo";

export default function DeleteButton() {
  const { selectedTodoId, todos, removeTodo, closeDeleteModal } =
    useTodoStore();

  if (selectedTodoId === null) return null;

  const todo = todos.find((t) => t.id === selectedTodoId);

  if (!todo) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background เบลอ + overlay */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-300"
        onClick={closeDeleteModal}
      ></div>

      {/* Modal card */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 z-10 animate-scaleFadeIn">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">ยืนยันการลบ</h2>
        <p className="mb-6 text-gray-600">
          คุณแน่ใจหรือไม่ว่าต้องการลบ "{todo.text}"?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={closeDeleteModal}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            ยกเลิก
          </button>
          <button
            onClick={() => {
              removeTodo(selectedTodoId);
              closeDeleteModal();
            }}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}
