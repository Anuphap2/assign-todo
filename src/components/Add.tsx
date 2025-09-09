import { useState } from "react";
import { useTodoStore } from "../store/Todo";

export default function AddTodo() {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="✍️ พิมพ์สิ่งที่ต้องทำ..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-5 py-3 rounded-lg shadow"
      >
        เพิ่ม
      </button>
    </div>
  );
}
