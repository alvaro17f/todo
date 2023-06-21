import { type TodoType } from "../types";
type Props = TodoType & {
  onRemoveTodo: ({ id }: Pick<TodoType, "id">) => void;
  onToggleCompletedTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
};
export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompletedTodo,
}) => {
  return (
    <div className="view">
      <input
        id={id}
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={(event) => onToggleCompletedTodo({ id, completed: event.target.checked })}
      />
      <label htmlFor={id}>{title}</label>
      <button
        type="button"
        className="destroy"
        onClick={() => onRemoveTodo({ id })}
      />
    </div>
  );
};
