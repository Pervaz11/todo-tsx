import { Todo } from "../types/todo.types";

const STORAGE_KEY = "todos";

export const saveTodosToStorage = (todos: Todo[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const getTodosFromStorage = (): Todo[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
