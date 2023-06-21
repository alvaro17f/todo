import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoType } from "./types";

const mockTodos = [
  {
    id: "1",
    title: "Hacer 1 hora de tests de conducir",
    completed: true,
  },
  {
    id: "2",
    title: "Aprender Capacitor",
    completed: false,
  },
  {
    id: "3",
    title: "Hablar con familia",
    completed: false,
  },
];

export function App() {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: Pick<TodoType, "id">) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <TodoList onRemoveTodo={handleRemove} onToggleCompletedTodo={handleCompleted} todos={todos} />
    </div>
  );
}
