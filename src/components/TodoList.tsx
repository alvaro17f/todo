import { TodoType, type TodoListType } from "../types";
import { Todo } from "./Todo";

type Props = {
  todos: TodoListType;
  onRemoveTodo: ({ id }: Pick<TodoType, "id">) => void;
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
};

export const TodoList: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompletedTodo={onToggleCompletedTodo}
          />
        </li>
      ))}
    </ul>
  );
};
