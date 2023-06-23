import { useEffect, useRef, useState } from "react";
import { TodoType } from "../types";

type Props = {
  saveTodo: ({ title }: Pick<TodoType, "title">) => void;
};

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    saveTodo({ title: inputValue });
    setInputValue("");
  };
  useEffect(() => {
    inputElement.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onKeyDown={() => {}}
        placeholder="¿Qué quieres hacer?"
        ref={inputElement}
      />
    </form>
  );
};
