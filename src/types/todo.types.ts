// src/types/todo.types.ts
export interface Todo {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: string;
}

export enum FilterStatus {
  ALL = "all",
  COMPLETED = "completed",
  PENDING = "pending",
}
