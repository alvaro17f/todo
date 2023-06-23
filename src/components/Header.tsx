import { type TodoType } from "../types";
import { CreateTodo } from "./CreateTodo";

type Props = {
  onAddTodo: ({ title }: Pick<TodoType, "title">) => void;
};

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        todo
        <img
          alt="typescript"
          style={{ width: "60px", height: "auto" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
        />
      </h1>

    <CreateTodo saveTodo={onAddTodo} />

    </header>
  );
};