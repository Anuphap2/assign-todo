import "./App.css";
import AddTodo from "./components/Add";
import TodoList from "./components/Todo";
import DeleteButton from "./components/Del"; // เพิ่ม component modal

export default function App() {
  return (
    <div className="max-w-md w-full mx-auto mt-10 p-6 bg-white border rounded-2xl shadow-lg sm:max-w-lg md:max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Todo List
      </h1>

      <div className="mb-6">
        <AddTodo />
      </div>

      <div className="mt-4">
        <TodoList />
      </div>

      {/* ใส่ DeleteButton ไว้ที่นี่เพื่อให้ modal แสดงจาก store */}
      <DeleteButton />
    </div>
  );
}
