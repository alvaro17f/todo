import { type TODO_FILTERS } from "./consts";

export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};
export type TodoListType = TodoType[];

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
