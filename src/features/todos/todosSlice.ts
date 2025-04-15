import {
  getTodosFromStorage,
  saveTodosToStorage,
} from "../../utils/localStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types/todo.types";

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: getTodosFromStorage(),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.todos.push(payload);
      saveTodosToStorage(state.todos);
    },

    toggleTodo: (state, { payload }: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === payload);
      if (todo) todo.isCompleted = !todo.isCompleted;
      saveTodosToStorage(state.todos);
    },

    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== payload);
      saveTodosToStorage(state.todos);
    },

    editTodo: (state, { payload }: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((t) => t.id === payload.id);
      if (index !== -1) {
        state.todos[index] = payload;
        saveTodosToStorage(state.todos);
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
