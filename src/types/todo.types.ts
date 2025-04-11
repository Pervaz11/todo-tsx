export enum TodoStatus {
  COMPLETED = "completed",
  PENDING = "pending",
}

export type FilterType = "all" | "completed" | "pending";

export interface Todo {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: string;
}
