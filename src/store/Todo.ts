import { create } from "zustand";

export type Todo = {
  id: number;
  text: string;
};

export type TodoStore = {
  todos: Todo[];
  selectedTodoId: number | null;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  openDeleteModal: (id: number) => void;
  closeDeleteModal: () => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  selectedTodoId: null,

  addTodo: (text) =>
    set((state) => ({ todos: [...state.todos, { id: Date.now(), text }] })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
      selectedTodoId: state.selectedTodoId === id ? null : state.selectedTodoId,
    })),

  openDeleteModal: (id) => set({ selectedTodoId: id }),
  closeDeleteModal: () => set({ selectedTodoId: null }),
}));
